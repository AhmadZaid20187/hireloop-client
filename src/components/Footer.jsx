import Image from "next/image";
import { Link } from "@heroui/react";
import image from 'next/image'; // update path to your actual logo file

const productLinks = [
    { label: "Job discovery", href: "/job-discovery" },
    { label: "Worker AI", href: "/worker-ai" },
    { label: "Companies", href: "/companies" },
    { label: "Salary data", href: "/salary-data" },
];

const navigationLinks = [
    { label: "Help center", href: "/help-center" },
    { label: "Career library", href: "/career-library" },
    { label: "Contact", href: "/contact" },
];

const resourceLinks = [
    { label: "Brand Guideline", href: "/brand-guideline" },
    { label: "Newsroom", href: "/newsroom" },
];

export default function Footer() {
    return (
        <footer className="">
            <div className=" border border-white/5 bg-[#0e0e10] px-8 py-10">
                <div className="flex flex-col justify-between gap-10 sm:flex-row sm:gap-6">
                    {/* Logo + tagline */}
                    <div className="max-w-xs">
                        <Link href="/" className="flex items-center">
                            <Image src="/images/logo.png"
                                alt="hireloop"
                                priority
                                className="h-12 w-auto"
                                width={120}
                                height={120} />
                        </Link>
                        <p className="mt-4 text-sm leading-relaxed text-gray-400">
                            The AI-native career platform. Built for people who take their
                            work seriously.
                        </p>
                    </div>

                    {/* Link columns */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-16">
                        <div>
                            <h4 className="text-sm font-medium text-[#6c7bff]">Product</h4>
                            <ul className="mt-4 flex flex-col gap-3">
                                {productLinks.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            className="text-sm text-gray-400 hover:text-white"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-[#6c7bff]">
                                Navigations
                            </h4>
                            <ul className="mt-4 flex flex-col gap-3">
                                {navigationLinks.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            className="text-sm text-gray-400 hover:text-white"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-[#6c7bff]">
                                Resources
                            </h4>
                            <ul className="mt-4 flex flex-col gap-3">
                                {resourceLinks.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            className="text-sm text-gray-400 hover:text-white"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Social icons */}
                <div className="mt-10 flex items-center gap-3">
                    <Link
                        href="https://facebook.com"
                        aria-label="Facebook"
                        className="flex h-8 w-8 items-center justify-center rounded-full text-gray-300 hover:text-white"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                            <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.13 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.81 8.44-4.94 8.44-9.94Z" />
                        </svg>
                    </Link>
                    <Link
                        href="https://pinterest.com"
                        aria-label="Pinterest"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#5b4af0] text-white"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.79-.16-2 .04-2.86.18-.78 1.16-4.95 1.16-4.95s-.3-.59-.3-1.47c0-1.37.8-2.4 1.79-2.4.85 0 1.26.63 1.26 1.39 0 .85-.54 2.11-.82 3.28-.23.98.49 1.78 1.46 1.78 1.75 0 2.93-2.25 2.93-4.91 0-2.03-1.37-3.54-3.85-3.54-2.81 0-4.56 2.1-4.56 4.44 0 .81.24 1.38.61 1.82.17.2.2.28.13.51-.04.17-.15.6-.19.77-.06.24-.25.33-.46.24-1.29-.53-1.89-1.93-1.89-3.51 0-2.61 2.2-5.74 6.57-5.74 3.51 0 5.82 2.54 5.82 5.27 0 3.61-2.01 6.31-4.97 6.31-1 0-1.93-.55-2.25-1.17 0 0-.54 2.15-.65 2.57-.2.74-.6 1.49-.97 2.07.86.26 1.78.4 2.73.4 5.52 0 10-4.48 10-10S17.52 2 12 2Z" />
                        </svg>
                    </Link>
                    <Link
                        href="https://linkedin.com"
                        aria-label="LinkedIn"
                        className="flex h-8 w-8 items-center justify-center rounded-full text-gray-300 hover:text-white"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
                        </svg>
                    </Link>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 flex flex-col gap-4 border-t border-white/5 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>Copyright 2024 — Programming Hero</p>
                    <div className="flex items-center gap-4">
                        <Link href="/terms" className="text-gray-400 hover:text-white">
                            Terms & Policy
                        </Link>
                        <span>-</span>
                        <Link href="/privacy" className="text-gray-400 hover:text-white">
                            Privacy Guideline
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}