import styles from '@/styles/Home.module.css'

export const Product = ({ data, market }) => {
  switch (market) {
    case 'wb':
      return data.data.products.map((p, i) => <WBProduct p={p} key={i} />)
  
    case 'oskelly':
      return data.data.items.map((p, i) => <OskellyProduct p={p} key={i} />)

    case 'va':
      return data.data.map((p, i) => <VAProduct p={p} key={i} />)

    case 'ls':
      return data.productsData.map((p, i) => <LSProduct p={p} key={i} />)

    case 'tsum':
      return data.map((p, i) => <TSUMProduct p={p} key={i} />)

    case 'un':
      return data.items.map((p, i) => <UNICORNProduct p={p} key={i} />)

    case '12':
      return data.data.items.map((p, i) => <StoreezProduct p={p} key={i} />)

    case 'usmall':
      return data.hits.map((p, i) => <USMallProduct p={p} key={i} />)

    case 'square':
      return data.items.map((p, i) => <SquareProduct p={p} key={i} />)
    
    default:
      return 'Unknown market'
  }
}

const WBProduct = ({ p }) => {
  const id = p.id.toString()
  const vol = id.slice(0, -5)
  let basket = '28'
  if (vol < 425)
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
  else if (vol < 2413)
    basket = '15'
  else if (vol < 2622)
    basket = '16'
  else if (vol < 2839)
    basket = '17'
  else if (vol < 3055)
    basket = '18'
  else if (vol < 3270)
    basket = '19'
  else if (vol < 3490)
    basket = '20'
  else if (vol < 3700)
    basket = '21'
  else if (vol < 3912)
    basket = '22'
  else if (vol < 4133)
    basket = '23'
  else if (vol < 4343)
    basket = '24'
  else if (vol < 4566)
    basket = '25'
  else if (vol < 4870)
    basket = '26'
  else if (vol < 5250)
    basket = '27'

  return (
    <a className={styles.card} href={`https://www.wildberries.ru/catalog/${id}/detail.aspx`} target='_blank'>
      <img
        className={styles.cardimg}
        src={`https://basket-${basket}.wbbasket.ru/vol${vol}/part${id.slice(0,-3)}/${id}/images/big/1.webp`}
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
          {new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(p.sizes[0].price ? p.sizes[0].price.product/100 : 0)}
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

const TSUMProduct = ({ p }) => {
  return (
    <a className={styles.card} href={`https://www.tsum.ru/product/${p.slug}`} target='_blank'>
      <img
        className={styles.cardimg}
        src={p.photos[0].middle}
        alt={p.title}
      />

      <div className={styles.carddesc}>
        {/* <div>{p.brand.name + ' ' + p.name}</div>
        <div>{p.conditionName}</div> */}
        <div className={`${styles.cardprice} ${styles.va} ${styles.cardsize}`}>
          {p.skuList.map(s => s.size.title).join(' ')}
        </div>
        <div className={`${styles.cardprice} ${styles.brd}`}>
          {new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(p.skuList[0].price_discount)}
        </div>
      </div>
    </a>
  )
}

const UNICORNProduct = ({ p }) => {
  return (
    <a className={styles.card} href={`https://unicorngo.ru/product/${p.slug}-${p.spuId}`} target='_blank'>
      <img
        className={styles.cardimg}
        src={p.images[0]}
        alt={p.name}
      />

      <div className={styles.carddesc}>
        {/* <div>{p.brand.name + ' ' + p.name}</div>
        <div>{p.conditionName}</div> */}
        {/* <div className={`${styles.cardprice} ${styles.va} ${styles.cardsize}`}>
          {p.skuList.map(s => s.size.title).join(' ')}
        </div> */}
        <div className={`${styles.cardprice} ${styles.brd}`}>
          {new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(p.price)}
        </div>
      </div>
    </a>
  )
}

const StoreezProduct = ({ p }) => {
  return (
    <a className={styles.card} href={p.url} target='_blank'>
      <img
        className={styles.cardimg}
        src={p.images[0].variants[3]}
        alt={p.title}
      />

      <div className={styles.carddesc}>
        <div className={`${styles.cardprice} ${styles.brd}`}>
          {new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(p.price)}
        </div>
      </div>
    </a>
  )
}

const USMallProduct = ({ p }) => {
  return (
    <a className={styles.card} href={`https://usmall.ru/product/${p.product_id}-${p.origin_name.replaceAll(' - ','-').replaceAll(' ','-').toLowerCase()}-${p.brand.name.replaceAll(' - ','-').replaceAll(' ','-').toLowerCase()}`} target='_blank'>
      <img
        className={styles.cardimg}
        src={p.images[0].url}
        alt={p.name}
      />

      <div className={styles.carddesc}>
        <div className={`${styles.cardprice} ${styles.usmall}`}>
          {new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(p.price)}
        </div>
      </div>
    </a>
  )
}

const SquareProduct = ({ p }) => {
  return (
    <a className={styles.card} href={`https://squarestore.ru${p.url}`} target='_blank'>
      <img
        className={styles.cardimg}
        src={`https://squarestore.ru${p.img}`}
        alt={p.title}
      />

      <div className={styles.carddesc}>
        <div className={`${styles.cardprice} ${styles.brd}`}>
          {p.price}
        </div>
      </div>
    </a>
  )
}