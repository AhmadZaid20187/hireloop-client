"use client";

import { motion } from "motion/react"
import { useState } from "react";
import Image from "next/image";
import { Link, Button } from "@heroui/react";
import image from 'next/image'; // update path to your actual logo file
import { useSession, signOut } from "@/lib/auth-client";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data: session, isPending } = useSession()
    console.log(session, isPending)
    const user = session?.user;

    const handleSignOut = async () => {
        await signOut();
    }

    return (
        <nav className="w-full px-4 py-4 bg-[#0e0e10]">
            <div className="rounded-2xl border border-white/5 bg-[#1c1c1f]">
                <header className="flex h-16 items-center justify-between px-6">
                    {/* Hamburger (mobile only) + Logo */}
                    <div className="flex items-center gap-4">
                        <button
                            className="text-gray-300 hover:text-white sm:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="sr-only">Menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>

                        <Link href="/" className="flex items-center">
                            <Image src="/images/logo.png"
                                alt="hireloop"
                                priority
                                className="h-7 w-auto"
                                width={60}
                                height={60} />
                        </Link>
                    </div>

                    {/* Center nav links (desktop only) */}
                    <ul className="hidden items-center gap-6 sm:flex">
                        <li>
                            <Link href="/jobs" className="text-sm text-gray-300 hover:text-white">
                                Browse Jobs
                            </Link>
                        </li>
                        <li>
                            <Link href="/company" className="text-sm text-gray-300 hover:text-white">
                                Company
                            </Link>
                        </li>
                        <li>
                            <Link href="/pricing" className="text-sm text-gray-300 hover:text-white">
                                Pricing
                            </Link>
                        </li>
                    </ul>

                    {/* Right side: divider, sign in, get started */}
                    <div className="flex items-center gap-4">
                        <div className="hidden h-5 w-px bg-white/15 sm:block" />
                        {
                            user ?
                                <>
                                    <span className="font-bold">Hi</span> {user.name}!
                                    <Button onClick={handleSignOut} variant="ghost">SignOut</Button>
                                </>
                                :

                                <Link
                                    href="/auth/sign-in"
                                    className="hidden text-sm font-medium text-[#6c7bff] sm:block"
                                >
                                    Sign In
                                </Link>}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1 }}
                            onHoverStart={() => console.log('hover started!')}

                            as={Link}
                            href="/get-started"
                            className="hover:cursor-pointer rounded-lg bg-[#5b4af0] px-5 py-3 font-medium text-white"
                        >
                            Get Started
                        </motion.button>
                    </div>
                </header>

                {/* Mobile dropdown menu */}
                {isMenuOpen && (
                    <div className="border-t border-white/5 sm:hidden">
                        <ul className="flex flex-col gap-1 p-4">
                            <li>
                                <Link
                                    href="/jobs"
                                    className="block py-2 text-sm text-gray-300 hover:text-white"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Browse Jobs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/company"
                                    className="block py-2 text-sm text-gray-300 hover:text-white"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Company
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/pricing"
                                    className="block py-2 text-sm text-gray-300 hover:text-white"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li className="pt-2">
                                <Link
                                    href="/auth/sign-in"
                                    className="block py-2 text-sm font-medium text-[#6c7bff]"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Sign In
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}