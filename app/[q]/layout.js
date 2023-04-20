import { Search } from '@/components/Search'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const tags = ['zara', 'pull&bear', 'bershka', 'твое']

export default function Layout({ children }) {
  return (
    <div className={`${styles.container} ${inter.className}`}>
      <div className={styles.tags}>
        <Search />
        {tags.map((tag, i) => <a className={styles.tag} href={'/' + tag} key={i}>{tag}</a>)}
      </div>

      {children}
    </div>
  )
}