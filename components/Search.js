'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const Search = ({ q }) => {
  const router = useRouter()
  const [query, setQuery] = useState(q)

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