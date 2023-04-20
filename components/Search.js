'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'

export const Search = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [query, setQuery] = useState(decodeURI(pathname.substring(1)))

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (query.length > 0)
        router.push(query)
    }
  }

  return (
    <input 
      type='text' 
      placeholder='Search' 
      value={query} 
      onChange={(e) => setQuery(e.target.value)} 
      onKeyDown={handleKeyDown} 
    />
  )
}