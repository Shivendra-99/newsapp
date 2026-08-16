const BASE_URL = "https://newsapi.org/v2/top-headlines";

async function requestHeadlines({ country, category, pageSize }) {
    const params = new URLSearchParams({
        country,
        apiKey: import.meta.env.VITE_NEWS_API_KEY,
        pageSize,
    });
    if (category) params.set("category", category);

    const res = await fetch(`${BASE_URL}?${params.toString()}`);
    const data = await res.json();
    return { articles: data.articles || [], country };
}

// NewsAPI currently has little/no top-headlines coverage for many countries on this plan,
// so when the requested country comes back empty we fall back to "us" rather than show nothing.
export async function fetchTopHeadlines({ country, category, pageSize }) {
    const primary = await requestHeadlines({ country, category, pageSize });
    if (primary.articles.length > 0 || country === "us") {
        return primary;
    }
    return requestHeadlines({ country: "us", category, pageSize });
}
