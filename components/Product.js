import styles from '@/styles/Home.module.css'

export const Product = ({ data, market }) => {
  switch (market) {
    case 'wb':
      return data.data.products.map((p, i) => <WBProduct p={p} key={i} />)
  
    case 'brandly':
      return data.result.productsResult.items.map((p, i) => <BrandlyProduct p={p} key={i} />)

    case 'brd':
      return data.productsList.map((p, i) => <BrdProduct p={p} key={i} />)

    case 'oskelly':
      return data.data.items.map((p, i) => <OskellyProduct p={p} key={i} />)

    case 'va':
      return data.data.map((p, i) => <VAProduct p={p} key={i} />)

    case 'ls':
      return data.productsData.map((p, i) => <LSProduct p={p} key={i} />)
    
    default:
      return 'Unknown market'
  }
}

const WBProduct = ({ p }) => {
  const id = p.id.toString()
  const vol = id.slice(0, -5)
  let basket = '15'
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
  else if (vol < 1920)
    basket = '12'
  else if (vol < 2042)
    basket = '13'
  else if (vol < 2190)
    basket = '14'

  return (
    <a className={styles.card} href={`https://www.wildberries.ru/catalog/${id}/detail.aspx`} target='_blank'>
      <img
        className={styles.cardimg}
        src={`https://basket-${basket}.wbbasket.ru/vol${vol}/part${id.slice(0,-3)}/${id}/images/c516x688/1.jpg`}
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

const BrandlyProduct = ({ p }) => {
  return (
    <a className={styles.card} href={`https://www.brandly.ru/p/${p.slug}`} target='_blank'>
      <img
        className={styles.cardimg}
        src={p.thumbnail && p.thumbnail.webp}
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

const BrdProduct = ({ p }) => {
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

const OskellyProduct = ({ p }) => {
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

const VAProduct = ({ p }) => {
  return (
    <a className={styles.card} href={`https://vipavenue.ru${p.url}`} target='_blank'>
      <img
        className={styles.cardimg}
        src={p.media_files_small ? p.media_files_small[0].url : ''}
        alt={p.name}
      />

      <div className={styles.carddesc}>
        {/* <div>{p.brand.name + ' ' + p.name}</div>
        <div>{p.conditionName}</div> */}
        <div className={`${styles.cardprice} ${styles.va} ${styles.cardsize}`}>
          {p.offers.map(s => s.size.name).join(' ')}
        </div>
        <div className={`${styles.cardprice} ${styles.brd}`}>
          {new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(p.price)}
        </div>
      </div>
    </a>
  )
}

const LSProduct = ({ p }) => {
  return (
    <a className={styles.card} href={`https://lsboutique.ru/products/${p.url}`} target='_blank'>
      <img
        className={styles.cardimg}
        src={p.large_image}
        alt={p.model}
      />

      <div className={styles.carddesc}>
        {/* <div>{p.brand.name + ' ' + p.name}</div>
        <div>{p.conditionName}</div> */}
        <div className={`${styles.cardprice} ${styles.va} ${styles.cardsize}`}>
          {p.sizes.map(s => s.str_size).join(' ')}
        </div>
        <div className={`${styles.cardprice} ${styles.brd}`}>
          {new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(p.price)}
        </div>
      </div>
    </a>
  )
}