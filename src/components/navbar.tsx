'use client' // tells Next.js this is a client component

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-bold text-blue-600">Sangha</div>
        <div className="space-x-6">
          <Link href="#home" className="hover:text-blue-500">Home</Link>
          <Link href="#about" className="hover:text-blue-500">About</Link>
          <Link href="#projects" className="hover:text-blue-500">Projects</Link>
          <Link href="/resume.pdf" target="_blank" className="hover:text-blue-500">Resume</Link>
        </div>
      </div>
    </nav>
  )
}