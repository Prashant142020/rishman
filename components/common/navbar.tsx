'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full  border-border z-50 shadow-sm  border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="shrink-0 font-bold text-xl text-primary">
            Rishman Jot Kaur Chahal
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </Link> */}
            <Link
              href="/publications"
              className="text-foreground hover:text-primary transition-colors"
            >
              Publications
            </Link>
            <Link
              href="/teaching"
              className="text-foreground hover:text-primary transition-colors"
            >
              Teaching
            </Link>
            <Link
              href="/projects"
              className="text-foreground hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/supervision"
              className="text-foreground hover:text-primary transition-colors"
            >
              Supervision
            </Link>
            <Link
              href="/research-group"
              className="text-foreground hover:text-primary transition-colors"
            >
              Research Group
            </Link>
            {/* <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link> */}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-secondary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {/* <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-foreground hover:bg-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link> */}

            <Link
            
              href="/publications"
              className="block px-3 py-2 rounded-md text-foreground hover:bg-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Publications
            </Link>

            <Link
              href="/teaching"
              className="block px-3 py-2 rounded-md text-foreground hover:bg-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Teaching
            </Link>
            <Link
              href="/projects"
              className="block px-3 py-2 rounded-md text-foreground hover:bg-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/supervision"
              className="block px-3 py-2 rounded-md text-foreground hover:bg-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Supervision
            </Link>

            <Link
              href="/research-group"
              className="block px-3 py-2 rounded-md text-foreground hover:bg-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Research Group
            </Link>

            {/* <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-foreground hover:bg-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link> */}
          </div>
        )}
      </div>
    </nav>
  );
}
