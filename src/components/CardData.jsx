import { ArrowRight } from "@phosphor-icons/react";
import { timeAgo } from "../utils/timeAgo";

const CardData = (props) => {
    const { url, title, description, publishedAt, source, content, category } = props;
    return (
        <article className="group flex h-full flex-col border-t-2 border-foreground pt-4">
            <a href={content} target="_blank" rel="noreferrer" className="block aspect-[4/3] overflow-hidden bg-muted">
                <img
                    src={url || "https://bitsofco.de/content/images/2018/12/broken-1.png"}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </a>
            <div className="flex flex-1 flex-col pt-3">
                <div className="mb-2 flex items-center gap-2 text-xs">
                    {category && (
                        <span className="font-extrabold uppercase tracking-widest text-primary">
                            {category}
                        </span>
                    )}
                    <span className="text-muted-foreground">{timeAgo(publishedAt)}</span>
                </div>
                <a href={content} target="_blank" rel="noreferrer">
                    <h3 className="font-display line-clamp-2 text-lg font-extrabold leading-tight text-foreground group-hover:underline">
                        {title}
                    </h3>
                </a>
                <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">{description}</p>
                <div className="mt-3 flex items-center justify-between pt-2 text-xs">
                    <span className="font-bold uppercase tracking-wide text-foreground/70">{source || "Unknown"}</span>
                    <a
                        href={content}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-bold text-accent hover:underline"
                    >
                        Read more <ArrowRight size={14} aria-hidden="true" />
                    </a>
                </div>
            </div>
        </article>
    );
};
export default CardData;
