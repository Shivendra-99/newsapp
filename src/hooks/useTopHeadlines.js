import { useEffect, useState } from "react";
import { fetchTopHeadlines } from "../api/newsApi";

export function useTopHeadlines({ category, country, pageSize }) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [usedCountry, setUsedCountry] = useState(country);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        fetchTopHeadlines({ category, country, pageSize }).then((result) => {
            if (cancelled) return;
            setArticles(result.articles);
            setUsedCountry(result.country);
            setLoading(false);
        });
        return () => {
            cancelled = true;
        };
    }, [category, country, pageSize]);

    return { articles, loading, usedCountry };
}
