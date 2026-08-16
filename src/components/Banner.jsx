import { timeAgo } from "../utils/timeAgo";

function Banner({ url, title, source, publishedAt, content, variant = "large" }) {
    if (variant === "small") {
        return (
            <a
                href={content}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl p-2 transition-colors duration-200 hover:bg-muted"
            >
                <img
                    src={url || "https://bitsofco.de/content/images/2018/12/broken-1.png"}
                    alt=""
                    className="h-16 w-16 shrink-0 rounded-lg object-cover"
                />
                <div className="min-w-0">
                    <p className="line-clamp-2 text-sm font-semibold text-foreground group-hover:text-primary">
                        {title}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                        {source}{source && publishedAt ? " · " : ""}{timeAgo(publishedAt)}
                    </p>
                </div>
            </a>
        );
    }

    return (
        <a
            href={content}
            target="_blank"
            rel="noreferrer"
            className="group relative block aspect-video w-full overflow-hidden rounded-2xl bg-muted sm:aspect-[16/8]"
        >
            <img
                src={url || "https://bitsofco.de/content/images/2018/12/broken-1.png"}
                alt=""
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-red-300">
                    {source || "Featured"}
                </p>
                <h2 className="font-display text-xl font-bold leading-tight text-white sm:text-3xl">
                    {title}
                </h2>
                <p className="mt-2 text-sm text-white/70">{timeAgo(publishedAt)}</p>
            </div>
        </a>
    );
}

export default Banner;
