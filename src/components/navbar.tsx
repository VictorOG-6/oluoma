'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
]

const Navbar = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    const isActive = (href: string) => pathname === href

    return (
        <nav className="flex flex-col">
            {/* Top Banner */}
            <div className="bg-gradient-to-t from-[#EE51B4] to-[#EE51B4] flex items-center justify-center">
                <div className="text-2xl text-secondary lg:max-w-7xl">
                    <p>A curated brand journey</p>
                </div>
            </div>

            {/* Main Nav */}
            <div className="lg:max-w-7xl mx-auto w-screen flex items-center justify-between py-6 px-5 md:px-16 mb-2">

                {/* Logo */}
                <Link href="/" className="text-lg font-semibold">
                    Anuebunwa Oluoma
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-11 text-[20px] text-secondary">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`transition-colors ${isActive(link.href)
                                ? 'text-[#EE51B4]'
                                : 'text-secondary hover:text-[#EE51B4]'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} color="#000" /> : <Menu size={28} color="#000" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center gap-6 pb-6 text-lg text-secondary">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`transition-colors ${isActive(link.href)
                                ? 'text-primary'
                                : 'text-secondary hover:text-primary'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar