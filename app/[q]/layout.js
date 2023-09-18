import { Search } from '@/components/Search'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const tags = ['wb-zara', 'wb-pull&bear', 'wb-bershka', 'wb-твое', 'brandly-asos', 'brandly-topman', 'brd-new', 'oskelly-choice']

export default function Layout({ children }) {
  return (
    <div className={`${styles.container} ${inter.className}`}>
      <div className={styles.tags}>
        <Search />
        {tags.map((tag, i) => 
          <a 
            className={`${styles.tag} ${tag.split('-')[0] === 'wb' && styles.wb} ${tag.split('-')[0] === 'brandly' && styles.brandly} ${(tag.split('-')[0] === 'brd' || tag.split('-')[0] === 'oskelly') && styles.brd}`} 
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