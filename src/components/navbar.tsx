'use client'  // This tells Next.js this is a client component

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-bold">Your Name</div>
          
          {/* Navigation Links */}
          <div className="space-x-4">
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}