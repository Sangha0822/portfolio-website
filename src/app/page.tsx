'use client'

import { useState } from 'react'

export default function Home() {
  const [showPage, setShowPage] = useState(false)
  
  if(!showPage) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen">
        <button
          onClick={() => setShowPage(true)}
          className="bg-yellow-600 text-2xl text-textColor-light font-bold rounded-lg hover:opacity-80 w-48 h-12"
        >
          Enter Site
        </button>
        <h1 className="text-4xl font-bold text-textColor-light">
          Not much to see here... unless you want more.
        </h1>
        <p className="text-lg text-gray-700">(To learn more about me ↑)</p>
      </main>
    );
  } else {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1>Hello</h1>
      </main>
    )
  }
}
