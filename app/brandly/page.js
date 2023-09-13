import styles from '@/styles/Home.module.css'

async function fetchData(q) {
  const res = await fetch(`https://wbnew.vercel.app/api/brandly?q=${q}`, { next: { revalidate: 60 } })
  const data = await res.json()
  return data
}

export default async function Page({ params }) {
  const data = await fetchData(params.q)
  console.log(data)

  return (
    <div className={styles.cards}>
      {/* {data.data.products.map((p, i) => {
        
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
      })} */}
    </div>
  )
}