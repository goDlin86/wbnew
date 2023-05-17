import styles from '@/styles/Home.module.css'

async function fetchData(q) {
  const res = await fetch(`https://wbnew.vercel.app/api/search?q=${q}`, { next: { revalidate: 60 } })
  const data = await res.json()
  return data
}

export default async function Page({ params }) {
  const data = await fetchData(params.q)

  return (
    <div className={styles.cards}>
      {data.data.products.map((p, i) => {
        const id = p.id.toString()
        const vol = id.slice(0, -5)
        let basket = '11'
        if (vol < 420)
          basket = '03'
        else if (vol < 670)
          basket = '04'
        else if (vol < 1000)
          basket = '05'
        else if (vol < 1100)
          basket = '06'
        else if (vol < 1140)
          basket = '07'
        else if (vol < 1170)
          basket = '08'
        else if (vol < 1315)
          basket = '09'
        else if (vol < 1600)
          basket = '10'

        return (
          <a className={styles.card} href={`https://www.wildberries.ru/catalog/${id}/detail.aspx`} target='_blank' key={i}>
            <img
              className={styles.cardimg}
              src={`https://basket-${basket}.wb.ru/vol${vol}/part${id.slice(0,-3)}/${id}/images/c516x688/1.jpg`}
              alt={p.name}
            />

            <div className={styles.carddesc}>
              <div>{p.name}</div>
              <div style={{ color: '#787f85' }}>{vol}</div>
              <div>{p.sizes.map(s => s.origName).join(' ')}</div>
              <div style={{ 
                color: '#cb11ab',
                // backgroundImage: 'linear-gradient(45deg, #cb11ab -20%, #481173 50%)',
                // WebkitBackgroundClip: 'text',
                // WebkitTextFillColor: 'transparent' 
              }}>
                {new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(p.salePriceU/100)}
              </div>
            </div>
          </a>
        )
      })}
    </div>
  )
}

// product
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
