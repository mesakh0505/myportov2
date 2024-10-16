'use client'

import Link from 'next/link'
import { ModeToggle } from './mode-toggle'

export function HeaderComponent() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <ul className="flex space-x-6">
          <li><Link href="/" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">Home</Link></li>
          <li><Link href="/about" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">About</Link></li>
          <li><Link href="/projects" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">Projects</Link></li>
          <li><Link href="/blog" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">Blog</Link></li>
          <li><Link href="/contact" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">Contact</Link></li>
        </ul>
        <ModeToggle />
      </nav>
    </header>
  )
}