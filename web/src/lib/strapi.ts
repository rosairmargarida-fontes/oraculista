const STRAPI_URL =
  process.env.STRAPI_URL ||
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  "http://localhost:1337";

type StrapiEntry<T> = {
  id: number;
  attributes?: T;
} & T;

type StrapiResponse<T> = {
  data: StrapiEntry<T>[];
  meta?: { pagination?: { total?: number } };
};

export type Post = {
  id: number;
  documentId?: string;
  title: string;
  slug: string;
  summary?: string;
  body?: string;
  authorName?: string;
  cover?: MediaPayload | null;
  image?: MediaPayload | null;
  category?: Category | null;
  createdAt?: string;
  publishedAt?: string;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  description?: string;
};

type Media = {
  url: string;
  alternativeText?: string;
};

type MediaPayload =
  | Media
  | {
      data?: {
        attributes?: Media;
      } | null;
    };

function normalizeEntry<T>(entry: StrapiEntry<T>): T & { id: number } {
  if (entry.attributes) {
    return { id: entry.id, ...entry.attributes } as T & { id: number };
  }
  return entry as T & { id: number };
}

export async function fetchPosts(limit = 6): Promise<Post[]> {
  const url = new URL("/api/posts", STRAPI_URL);
  url.searchParams.set("sort", "publishedAt:desc");
  url.searchParams.set("populate[cover]", "true");
  url.searchParams.set("populate[image]", "true");
  url.searchParams.set("populate[category]", "true");
  url.searchParams.set("pagination[pageSize]", String(limit));

  try {
    const res = await fetchWithFallback(url, { next: { revalidate: 60 } });
    if (!res.ok) {
      return [];
    }

    const json = (await res.json()) as StrapiResponse<Post>;
    return (json.data ?? []).map((entry) => normalizeEntry(entry));
  } catch {
    return [];
  }
}

export async function fetchPostsByCategory(
  categorySlug: string,
  limit = 12
): Promise<Post[]> {
  const url = new URL("/api/posts", STRAPI_URL);
  url.searchParams.set("sort", "publishedAt:desc");
  url.searchParams.set("populate[cover]", "true");
  url.searchParams.set("populate[image]", "true");
  url.searchParams.set("populate[category]", "true");
  url.searchParams.set("filters[category][slug][$eqi]", categorySlug);
  url.searchParams.set("pagination[pageSize]", String(limit));

  try {
    const res = await fetchWithFallback(url, { next: { revalidate: 60 } });
    if (!res.ok) {
      return [];
    }

    const json = (await res.json()) as StrapiResponse<Post>;
    return (json.data ?? []).map((entry) => normalizeEntry(entry));
  } catch {
    return [];
  }
}

export async function fetchPostsByCategoryId(
  categoryId: number,
  limit = 12
): Promise<Post[]> {
  const url = new URL("/api/posts", STRAPI_URL);
  url.searchParams.set("sort", "publishedAt:desc");
  url.searchParams.set("populate[cover]", "true");
  url.searchParams.set("populate[image]", "true");
  url.searchParams.set("populate[category]", "true");
  url.searchParams.set("filters[category][id][$eq]", String(categoryId));
  url.searchParams.set("pagination[pageSize]", String(limit));

  try {
    const res = await fetchWithFallback(url, { next: { revalidate: 60 } });
    if (!res.ok) {
      return [];
    }

    const json = (await res.json()) as StrapiResponse<Post>;
    return (json.data ?? []).map((entry) => normalizeEntry(entry));
  } catch {
    return [];
  }
}

export async function fetchCategories(): Promise<Category[]> {
  const url = new URL("/api/categories", STRAPI_URL);
  url.searchParams.set("fields[0]", "name");
  url.searchParams.set("fields[1]", "slug");
  url.searchParams.set("sort", "name:asc");
  url.searchParams.set("pagination[pageSize]", "200");

  try {
    const res = await fetchWithFallback(url, { next: { revalidate: 300 } });
    if (!res.ok) {
      return [];
    }

    const json = (await res.json()) as StrapiResponse<Category>;
    return (json.data ?? []).map((entry) => normalizeEntry(entry));
  } catch {
    return [];
  }
}

export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  const url = new URL("/api/posts", STRAPI_URL);
  url.searchParams.set("filters[slug][$eq]", slug);
  url.searchParams.set("populate[cover]", "true");
  url.searchParams.set("populate[image]", "true");
  url.searchParams.set("pagination[pageSize]", "1");

  try {
    const res = await fetchWithFallback(url, { next: { revalidate: 60 } });
    if (!res.ok) {
      return null;
    }

    const json = (await res.json()) as StrapiResponse<Post>;
    const entry = json.data?.[0];
    return entry ? normalizeEntry(entry) : null;
  } catch {
    return null;
  }
}

export async function fetchPostSlugs(): Promise<string[]> {
  const url = new URL("/api/posts", STRAPI_URL);
  url.searchParams.set("fields[0]", "slug");
  url.searchParams.set("populate[cover]", "true");
  url.searchParams.set("populate[image]", "true");
  url.searchParams.set("pagination[pageSize]", "200");

  try {
    const res = await fetchWithFallback(url, { next: { revalidate: 300 } });
    if (!res.ok) {
      return [];
    }

    const json = (await res.json()) as StrapiResponse<Post>;
    return (json.data ?? [])
      .map((entry) => normalizeEntry(entry))
      .map((post) => post.slug);
  } catch {
    return [];
  }
}

export async function fetchPostCount(): Promise<number> {
  const url = new URL("/api/posts", STRAPI_URL);
  url.searchParams.set("pagination[pageSize]", "1");

  try {
    const res = await fetchWithFallback(url, { next: { revalidate: 60 } });
    if (!res.ok) {
      return 0;
    }

    const json = (await res.json()) as StrapiResponse<Post>;
    return json.meta?.pagination?.total ?? 0;
  } catch {
    return 0;
  }
}

export function getMediaUrl(media?: MediaPayload | null): string | null {
  if (!media) {
    return null;
  }

  if ("url" in media && media.url) {
    return normalizeMediaUrl(media.url);
  }

  const nestedUrl = media.data?.attributes?.url;
  return nestedUrl ? normalizeMediaUrl(nestedUrl) : null;
}

function normalizeMediaUrl(url: string): string {
  if (url.startsWith("http")) {
    return url;
  }

  return `${STRAPI_URL}${url}`;
}

async function fetchWithFallback(
  url: URL,
  init?: RequestInit
): Promise<Response> {
  try {
    return await fetch(url, init);
  } catch (error) {
    if (url.hostname === "localhost") {
      const fallbackUrl = new URL(url.toString());
      fallbackUrl.hostname = "127.0.0.1";
      return await fetch(fallbackUrl, init);
    }
    throw error;
  }
}
