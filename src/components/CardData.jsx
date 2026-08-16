import { ArrowRight } from "@phosphor-icons/react";
import { timeAgo } from "../utils/timeAgo";

const CardData = (props) => {
    const { url, title, description, publishedAt, source, content, category } = props;
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-shadow duration-200 hover:shadow-lg">
            <a href={content} target="_blank" rel="noreferrer" className="block aspect-[4/3] overflow-hidden bg-muted">
                <img
                    src={url || "https://bitsofco.de/content/images/2018/12/broken-1.png"}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </a>
            <div className="flex flex-1 flex-col p-4">
                <div className="mb-2 flex items-center gap-2 text-xs">
                    {category && (
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 font-semibold uppercase tracking-wide text-primary">
                            {category}
                        </span>
                    )}
                    <span className="text-muted-foreground">{timeAgo(publishedAt)}</span>
                </div>
                <a href={content} target="_blank" rel="noreferrer">
                    <h3 className="font-display line-clamp-2 text-base font-bold leading-snug text-foreground group-hover:text-primary">
                        {title}
                    </h3>
                </a>
                <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">{description}</p>
                <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-xs">
                    <span className="font-medium text-foreground/80">{source || "Unknown"}</span>
                    <a
                        href={content}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
                    >
                        Read more <ArrowRight size={14} aria-hidden="true" />
                    </a>
                </div>
            </div>
        </article>
    );
};
export default CardData;
