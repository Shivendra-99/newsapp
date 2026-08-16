import { timeAgo } from "../utils/timeAgo";

function Banner({ url, title, source, publishedAt, content, variant = "large" }) {
    if (variant === "small") {
        return (
            <a
                href={content}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 border-t border-border py-3 first:border-t-0"
            >
                <img
                    src={url || "https://bitsofco.de/content/images/2018/12/broken-1.png"}
                    alt=""
                    className="h-16 w-16 shrink-0 object-cover"
                />
                <div className="min-w-0">
                    <p className="line-clamp-2 text-sm font-bold leading-snug text-foreground group-hover:underline">
                        {title}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                        {source}{source && publishedAt ? " · " : ""}{timeAgo(publishedAt)}
                    </p>
                </div>
            </a>
        );
    }

    return (
        <a href={content} target="_blank" rel="noreferrer" className="group relative block">
            <div className="aspect-video w-full overflow-hidden bg-muted sm:aspect-[16/8]">
                <img
                    src={url || "https://bitsofco.de/content/images/2018/12/broken-1.png"}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <span className="inline-block bg-primary px-2 py-0.5 text-xs font-extrabold uppercase tracking-widest text-primary-foreground">
                    {source || "Featured"}
                </span>
                <h2 className="font-display mt-3 max-w-2xl text-2xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-4xl">
                    {title}
                </h2>
                <p className="mt-3 text-sm font-medium uppercase tracking-wide text-white/70">{timeAgo(publishedAt)}</p>
            </div>
        </a>
    );
}

export default Banner;
