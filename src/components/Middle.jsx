import Banner from "./Banner";
import { useTopHeadlines } from "../hooks/useTopHeadlines";

const HeroSkeleton = () => (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="aspect-video animate-pulse rounded-2xl bg-muted sm:col-span-2 sm:aspect-[16/8]" />
        <div className="flex flex-col gap-3">
            <div className="flex gap-3">
                <div className="h-16 w-16 shrink-0 animate-pulse rounded-lg bg-muted" />
                <div className="flex-1 space-y-2 py-1">
                    <div className="h-3 w-full animate-pulse rounded bg-muted" />
                    <div className="h-3 w-2/3 animate-pulse rounded bg-muted" />
                </div>
            </div>
            <div className="flex gap-3">
                <div className="h-16 w-16 shrink-0 animate-pulse rounded-lg bg-muted" />
                <div className="flex-1 space-y-2 py-1">
                    <div className="h-3 w-full animate-pulse rounded bg-muted" />
                    <div className="h-3 w-1/2 animate-pulse rounded bg-muted" />
                </div>
            </div>
        </div>
    </div>
);

const Middle = (props) => {
    const { articles, loading } = useTopHeadlines({
        category: props.category,
        country: props.country,
        pageSize: props.pageSize,
    });

    if (loading) {
        return (
            <section className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
                <HeroSkeleton />
            </section>
        );
    }

    if (articles.length === 0) {
        return null;
    }

    const [featured, ...rest] = articles;
    const sideStories = rest.slice(0, 2);

    return (
        <section className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="sm:col-span-2">
                    <Banner
                        variant="large"
                        url={featured.urlToImage}
                        title={featured.title}
                        source={featured.source ? featured.source.name : ""}
                        publishedAt={featured.publishedAt}
                        content={featured.url}
                    />
                </div>
                {sideStories.length > 0 && (
                    <div className="flex flex-col justify-center gap-1">
                        {sideStories.map((article) => (
                            <Banner
                                key={article.url}
                                variant="small"
                                url={article.urlToImage}
                                title={article.title}
                                source={article.source ? article.source.name : ""}
                                publishedAt={article.publishedAt}
                                content={article.url}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Middle;
