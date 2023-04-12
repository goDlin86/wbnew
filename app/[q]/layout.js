import { Search } from '@/components/Search'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <div className={`${styles.container} ${inter.className}`}>
      <div className={styles.tags}>
        <Search />
        <a className={styles.tag} href='/zara'>zara</a>
        <a className={styles.tag} href='/pull&bear'>pull&bear</a>
        <a className={styles.tag} href='/bershka'>bershka</a>
      </div>

      {children}
    </div>
  )
}