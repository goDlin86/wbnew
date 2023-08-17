'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log('logging error:', error)
  }, [error])

  return (
    <>
      <div>Ошибка...</div>
      <div onClick={() => reset()}>Обновить</div>
    </>
  )
}