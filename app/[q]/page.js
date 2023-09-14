import { wbProduct } from '@/components/wbProduct'
import { brandlyProduct } from '@/components/brandlyProduct'
import styles from '@/styles/Home.module.css'

async function fetchData(q) {
  const res = await fetch(`https://wbnew.vercel.app/api/search?q=${q}`, { next: { revalidate: 60 } })
  const data = await res.json()
  return data
}

export default async function Page({ params }) {
  const { q } = params
  const market = q.split('-')[0]
  const data = await fetchData(q)

  return (
    <div className={styles.cards}>
      {market === 'wb' ? 
        data.data.products.map((p, i) => <wbProduct p={p} key={i} />) :
        data.result.productsResult.items.map((p, i) => <brandlyProduct p={p} key={i} />)
      }
    </div>
  )
}

// product wb
// {
//   "time1": 3,
//   "time2": 33,
//   "dist": 491,
//   "id": 150032021,
//   "root": 127156755,
//   "kindId": 1,
//   "subjectId": 184,
//   "subjectParentId": 1,
//   "name": "Рубашка",
//   "brand": "Zara",
//   "brandId": 101907,
//   "siteBrandId": 111907,
//   "supplierId": 1187496,
//   "sale": 24,
//   "priceU": 450000,
//   "salePriceU": 342000,
//   "logisticsCost": 0,
//   "saleConditions": 0,
//   "pics": 1,
//   "rating": 0,
//   "feedbacks": 0,
//   "volume": 2,
//   "isNew": true,
//   "colors": [
//     {
//       "name": "голубой",
//       "id": 11393254
//     }
//   ],
//   "sizes": [
//     {
//       "name": "42/44",
//       "origName": "S",
//       "rank": 171131,
//       "optionId": 251641480,
//       "wh": 117501,
//       "sign": "IBydtQf/2i3vxNOy6EWiOnsp+MY="
//     }
//   ],
//   "diffPrice": false
// }
