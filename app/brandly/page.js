import styles from '@/styles/Home.module.css'

async function fetchData() {
  const res = await fetch(`https://wbnew.vercel.app/api/brandly`, { next: { revalidate: 60 } })
  const data = await res.json()
  return data
}

export default async function Page() {
  const data = {} // await fetchData()
  console.log(data)

  return (
    <div className={styles.cards}>
      {/* {data.result.productsResult.items.map((p, i) => {
        
        return (
          <a className={styles.card} href={`https://www.brandly.ru/p/${p.slug}`} target='_blank' key={i}>
            <img
              className={styles.cardimg}
              src={p.thumbnail.source.webp}
              alt={p.name}
            />

            <div className={styles.carddesc}>
              <div>{p.name}</div>
              <div style={{ 
                color: '#cb11ab',
              }}>
                {new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(p.prices.base/100)}
              </div>
            </div>
          </a>
        )
      })} */}
    </div>
  )
}
