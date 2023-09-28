import { WBProduct, BrandlyProduct, BrdProduct, OskellyProduct } from '@/components/Product'
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
      {market === 'wb' && data.data.products.map((p, i) => <WBProduct p={p} key={i} />)}
      {market === 'brandly' && data.result.productsResult.items.map((p, i) => <BrandlyProduct p={p} key={i} />)}
      {market === 'brd' && data.productsList.map((p, i) => <BrdProduct p={p} key={i} />)}
      {market === 'oskelly' && data.data.items.map((p, i) => <OskellyProduct p={p} key={i} />)}
    </div>
  )
}
