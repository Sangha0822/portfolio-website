'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [showPage, setShowPage] = useState(false)
  const router = useRouter()
    return (
      <main className="flex flex-col items-center justify-center min-h-screen">

        <button
          onClick={() => router.push('/portfolio')}
          className="flex items-center justify-center">
          <img 
            src="/door.png" 
            alt="Door icon" 
            className="text-2xl text-textColor-light font-bold rounded-lg hover:opacity-80 w-32 h-36" 
          />
        </button>

        <h1 className="text-4xl font-extrabold text-textColor-light">
          Not much to see here... unless you want more.
        </h1>
        <p className="text-lg font-sans text-gray-700">(To learn more about me ↑)</p>
      </main>
    );
}
