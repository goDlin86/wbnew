import { Search } from '@/components/Search'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const tags = ['wb-zara', 'wb-pull&bear', 'wb-bershka', 'wb-твое', 'brandly-asos', 'brandly-zara', 'brandly-topman', 'brandly-collusion', 'brandly-weekday', 'brd-new', 'oskelly-choice']

export default function Layout({ children, params }) {
  return (
    <div className={`${styles.container} ${inter.className}`}>
      <div className={styles.tags}>
        <Search />
        {tags.map((tag, i) => 
          <a 
            className={`${styles.tag} ${styles[tag.split('-')[0]]} ${tag === decodeURI(params.q) && styles.active}`} 
            href={'/' + tag} 
            key={i}
          >
            {tag.split('-')[1]}
          </a>
        )}
      </div>

      {children}
    </div>
  )
}