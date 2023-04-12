import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Loading() {
  return (
    <div className={`${styles.container} ${inter.className}`}>
      Загрузка...
    </div>
  )
}