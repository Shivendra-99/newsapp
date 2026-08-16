import { useState } from "react";
import { NavLink } from "react-router-dom";
import { List, MagnifyingGlass, Moon, Newspaper, Sun, X } from "@phosphor-icons/react";
import { useTheme } from "../hooks/useTheme";

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

const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
});

const navLinkClasses = ({ isActive }) =>
    `whitespace-nowrap border-b-[3px] pb-3 pt-1 text-sm font-bold uppercase tracking-wide transition-colors duration-200 ${
        isActive
            ? "border-primary text-foreground"
            : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
    }`;

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 pb-3 pt-4 sm:px-6">
                <a href="/" className="flex items-center gap-2 text-foreground">
                    <Newspaper size={30} weight="fill" className="text-primary" aria-hidden="true" />
                    <span className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">News World</span>
                </a>

                <span className="hidden font-display text-sm italic text-muted-foreground md:block">{today}</span>

                <div className="flex items-center gap-1">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-muted"
                        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-muted lg:hidden"
                        aria-expanded={menuOpen}
                        aria-controls="mobile-nav"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        {menuOpen ? <X size={22} /> : <List size={22} />}
                    </button>
                </div>
            </div>

            <div className="h-[3px] bg-foreground" />

            <div className="mx-auto flex max-w-6xl items-center gap-5 border-b border-border px-4 sm:px-6">
                <nav aria-label="Categories" className="hidden flex-1 items-center gap-5 overflow-x-auto lg:flex">
                    {categories.map((c) => (
                        <NavLink key={c.to} to={c.to} end={c.to === "/"} className={navLinkClasses}>
                            {c.label}
                        </NavLink>
                    ))}
                </nav>

                <form
                    role="search"
                    onSubmit={(e) => e.preventDefault()}
                    className="hidden items-center gap-2 border-l border-border py-2.5 pl-5 lg:flex"
                >
                    <MagnifyingGlass size={18} className="text-muted-foreground" aria-hidden="true" />
                    <label htmlFor="site-search" className="sr-only">Search articles</label>
                    <input
                        id="site-search"
                        type="search"
                        placeholder="Search articles"
                        className="w-36 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                    />
                </form>

                <div className="flex flex-1 items-center gap-2 py-2.5 lg:hidden">
                    <MagnifyingGlass size={18} className="text-muted-foreground" aria-hidden="true" />
                    <label htmlFor="site-search-mobile" className="sr-only">Search articles</label>
                    <input
                        id="site-search-mobile"
                        type="search"
                        placeholder="Search articles"
                        className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                    />
                </div>
            </div>

            {menuOpen && (
                <nav id="mobile-nav" aria-label="Categories" className="flex flex-col gap-1 border-b border-border px-4 py-3 lg:hidden">
                    {categories.map((c) => (
                        <NavLink
                            key={c.to}
                            to={c.to}
                            end={c.to === "/"}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                `border-l-[3px] px-3 py-2 text-sm font-bold uppercase tracking-wide ${
                                    isActive
                                        ? "border-primary text-foreground"
                                        : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
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
