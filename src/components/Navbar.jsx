import { useState } from "react";
import { NavLink } from "react-router-dom";
import { List, MagnifyingGlass, Newspaper, X } from "@phosphor-icons/react";

const categories = [
    { to: "/", label: "Home" },
    { to: "/business", label: "Business" },
    { to: "/entertainment", label: "Entertainment" },
    { to: "/general", label: "General" },
    { to: "/health", label: "Health" },
    { to: "/science", label: "Science" },
    { to: "/sports", label: "Sports" },
    { to: "/technology", label: "Technology" },
];

const navLinkClasses = ({ isActive }) =>
    `whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
        isActive
            ? "bg-primary text-primary-foreground"
            : "text-foreground/70 hover:bg-muted hover:text-foreground"
    }`;

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
                <a href="/" className="flex shrink-0 items-center gap-2 text-foreground">
                    <Newspaper size={26} weight="fill" className="text-primary" aria-hidden="true" />
                    <span className="font-display text-xl font-bold tracking-tight">News World</span>
                </a>

                <nav aria-label="Categories" className="hidden flex-1 items-center gap-1 overflow-x-auto lg:flex">
                    {categories.map((c) => (
                        <NavLink key={c.to} to={c.to} end={c.to === "/"} className={navLinkClasses}>
                            {c.label}
                        </NavLink>
                    ))}
                </nav>

                <form
                    role="search"
                    onSubmit={(e) => e.preventDefault()}
                    className="ml-auto hidden items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1.5 sm:flex"
                >
                    <MagnifyingGlass size={18} className="text-muted-foreground" aria-hidden="true" />
                    <label htmlFor="site-search" className="sr-only">Search articles</label>
                    <input
                        id="site-search"
                        type="search"
                        placeholder="Search articles"
                        className="w-40 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                    />
                </form>

                <button
                    type="button"
                    className="ml-auto flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-muted lg:hidden"
                    aria-expanded={menuOpen}
                    aria-controls="mobile-nav"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? <X size={22} /> : <List size={22} />}
                </button>
            </div>

            {menuOpen && (
                <nav id="mobile-nav" aria-label="Categories" className="flex flex-col gap-1 border-t border-border px-4 py-3 lg:hidden">
                    {categories.map((c) => (
                        <NavLink
                            key={c.to}
                            to={c.to}
                            end={c.to === "/"}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                `rounded-lg px-3 py-2 text-sm font-medium ${
                                    isActive ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:bg-muted"
                                }`
                            }
                        >
                            {c.label}
                        </NavLink>
                    ))}
                </nav>
            )}
        </header>
    );
}

export default Navbar;
