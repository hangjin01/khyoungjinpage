
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
    { name: '홈', href: '/' },
    { name: '프로젝트', href: '/projects' },
    // { name: '소개', href: '/about' },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
                <Link href="/" className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    Portfolio
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400",
                                pathname === item.href
                                    ? "text-blue-600 dark:text-blue-400"
                                    : "text-gray-600 dark:text-gray-400"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600 dark:text-gray-400"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
                    <div className="flex flex-col p-4 space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "text-sm font-medium transition-colors",
                                    pathname === item.href
                                        ? "text-blue-600"
                                        : "text-gray-600 dark:text-gray-400"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
