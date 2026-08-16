import CardData from "./CardData";
import { useTopHeadlines } from "../hooks/useTopHeadlines";

const CardSkeleton = () => (
    <div className="animate-pulse border-t-2 border-border pt-4">
        <div className="aspect-[4/3] bg-muted" />
        <div className="space-y-2 pt-3">
            <div className="h-3 w-16 bg-muted" />
            <div className="h-4 w-full bg-muted" />
            <div className="h-4 w-2/3 bg-muted" />
        </div>
    </div>
);

const NewsItem = (props) => {
    const { articles, loading } = useTopHeadlines({
        category: props.category,
        country: props.country,
        pageSize: props.pageSize,
    });

    return (
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <div className="mb-6 flex items-end justify-between border-b-2 border-foreground pb-2">
                <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight text-foreground sm:text-3xl">
                    Latest News
                </h2>
            </div>

            {loading && (
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <CardSkeleton key={i} />
                    ))}
                </div>
            )}

            {!loading && articles.length === 0 && (
                <div className="border-2 border-foreground p-10 text-center text-muted-foreground">
                    No headlines available right now. Please check back shortly.
                </div>
            )}

            {!loading && articles.length > 0 && (
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {articles.map((article) => (
                        <CardData
                            key={article.url}
                            url={article.urlToImage}
                            title={article.title}
                            description={article.description}
                            publishedAt={article.publishedAt}
                            source={article.source ? article.source.name : ""}
                            content={article.url}
                            category={props.category}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};
export default NewsItem;
