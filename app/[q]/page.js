import { Product } from '@/components/Product'
import styles from '@/styles/Home.module.css'

async function fetchData(q) {
  const res = await fetch(`https://wbnew.vercel.app/api/search?q=${q}`, { cache: 'no-store' })
  const data = await res.json()
  return data
}

export default async function Page({ params }) {
  const { q } = params
  const market = q.split('-')[0]
  const data = await fetchData(q)

  return (
    <div className={styles.cards}>
      <Product data={data} market={market} />
    </div>
  )
}
