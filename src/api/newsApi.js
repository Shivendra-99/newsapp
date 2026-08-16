const BASE_URL = "https://api.currentsapi.services/v1/search";

function toArticle(item) {
    return {
        title: item.title,
        description: item.description,
        url: item.url,
        urlToImage: item.image && item.image !== "None" ? item.image : "",
        publishedAt: item.published,
        source: { name: item.author || "" },
    };
}

async function requestHeadlines({ country, category, pageSize }) {
    const params = new URLSearchParams();
    if (country) params.set("country", country.toUpperCase());
    if (category) params.set("category", category);

    const res = await fetch(`${BASE_URL}?${params.toString()}`, {
        headers: { Authorization: import.meta.env.VITE_CURRENTS_API_KEY },
    });
    const data = await res.json();
    const articles = (data.news || []).map(toArticle).slice(0, pageSize);
    return { articles, country };
}

// Safety net: if a country+category combo ever comes back empty, retry without
// the country filter rather than showing nothing.
export async function fetchTopHeadlines({ country, category, pageSize }) {
    const primary = await requestHeadlines({ country, category, pageSize });
    if (primary.articles.length > 0 || !country) {
        return primary;
    }
    return requestHeadlines({ country: null, category, pageSize });
}
