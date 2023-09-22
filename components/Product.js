import styles from '@/styles/Home.module.css'

export const WBProduct = ({ p }) => {
  const id = p.id.toString()
  const vol = id.slice(0, -5)
  let basket = '12'
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
  else if (vol < 1602)
    basket = '10'
  else if (vol < 1656)
    basket = '11'

  return (
    <a className={styles.card} href={`https://www.wildberries.ru/catalog/${id}/detail.aspx`} target='_blank'>
      <img
        className={styles.cardimg}
        src={`https://basket-${basket}.wb.ru/vol${vol}/part${id.slice(0,-3)}/${id}/images/c516x688/1.jpg`}
        alt={p.name}
      />

      <div className={styles.carddesc}>
        {/* <div>{p.name}</div>
        <div style={{ color: '#787f85' }}>{vol}</div> */}
        <div className={`${styles.cardprice} ${styles.wb} ${styles.cardsize}`}>
          {p.sizes.map(s => s.origName).join(' ')}
        </div>
        <div className={styles.cardprice} style={{ 
          backgroundColor: '#cb11ab',
          // backgroundImage: 'linear-gradient(45deg, #cb11ab -20%, #481173 50%)',
          // WebkitBackgroundClip: 'text',
          // WebkitTextFillColor: 'transparent' 
        }}>
          {new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(p.salePriceU/100)}
        </div>
      </div>
    </a>
  )
}

export const BrandlyProduct = ({ p }) => {
  return (
    <a className={styles.card} href={`https://www.brandly.ru/p/${p.slug}`} target='_blank'>
      <img
        className={styles.cardimg}
        src={p.thumbnail.webp}
        alt={p.name}
      />

      <div className={styles.carddesc}>
        {/* <div>{p.name}</div> */}
        <div className={`${styles.cardprice} ${styles.brandly}`}>
          {new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(p.prices.base)}
        </div>
      </div>
    </a>
  )
}

export const BrdProduct = ({ p }) => {
  return (
    <a className={styles.card} href={`https://www.brd.ru/product/${p.uriName}`} target='_blank'>
      <img
        className={styles.cardimg}
        src={p.products_image}
        alt={p.products_name}
      />

      <div className={styles.carddesc}>
        {/* <div>{p.products_name}</div>
        <div>{p.products_season}</div> */}
        <div className={`${styles.cardprice} ${styles.brd} ${styles.cardsize}`}>
          {p.showSizes.map(s => s.text).join(' ')}
        </div>
        <div className={`${styles.cardprice} ${styles.brd}`}>
          {p.current_price_text}
        </div>
      </div>
    </a>
  )
}

export const OskellyProduct = ({ p }) => {
  return (
    <a className={styles.card} href={`https://oskelly.ru${p.url}`} target='_blank'>
      <img
        className={styles.cardimg}
        src={p.images[0].path}
        alt={p.name}
      />

      <div className={styles.carddesc}>
        {/* <div>{p.brand.name + ' ' + p.name}</div>
        <div>{p.conditionName}</div> */}
        <div className={`${styles.cardprice} ${styles.brd} ${styles.cardsize}`}>
          {p.sizes.map(s => s.productSizeValue).join(' ')}
        </div>
        <div className={`${styles.cardprice} ${styles.brd}`}>
          {new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(p.price)}
        </div>
      </div>
    </a>
  )
}