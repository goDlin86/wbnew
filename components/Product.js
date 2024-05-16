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
      console.log(data)
      return data.data.map((p, i) => <VAProduct p={p} key={i} />)
    
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
        src={p.media_files_small[0].url}
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

// {
//   "id": 1393547,
//   "external_id": "62d0f328-c9c5-11ee-953c-0050569428a7",
//   "active": true,
//   "price": 49500,
//   "price_not_discount": 49500,
//   "discount_percent": 0,
//   "hide_price": false,
//   "not_show_ads": false,
//   "name": "Поло хлопковое",
//   "full_name": "Поло хлопковое DALMINE",
//   "article": "881149/002",
//   "description": "-Коричневое трикотажное поло из мягкого хлопка с фактурным вывязанным узором от DALMINE. \n-Модель облегающего силуэта с короткими рукавами, рельефными манжетами и поясом в резинку, отложным воротником, застежкой на молнию на груди. \n-Поло заменит сорочку в повседневных комфортных образах с брюками или джинсами.\n",
//   "url": "/product/1393547-polo-hlopkovoe-dalmine/",
//   "consist": "100% хлопок ",
//   "is_new_collection": true,
//   "is_sale": false,
//   "outlet": false,
//   "is_new": true,
//   "is_merchant": 0,
//   "filmed_on_model_plus_size": false,
//   "code": "1393547-polo-hlopkovoe-dalmine",
//   "brand_id": 235,
//   "brand": {
//       "id": 235,
//       "name": "DALMINE",
//       "code": "dalmine",
//       "highlight_on_brand_page": false,
//       "is_top": false
//   },
//   "section_id": 982,
//   "gender_id": 36360,
//   "season_id": 1151562,
//   "is_support_texel": null,
//   "bonus_program_available": true,
//   "sale_only_chat": false,
//   "offers": [
//       {
//           "id": 2067197,
//           "name": "DALMINE ml24 Поло К/Р р-р 50 881149/002 Коричневый-4250960",
//           "product_id": 1393547,
//           "size": {
//               "id": 643219,
//               "name": "50",
//               "code": "50",
//               "sort": 9,
//               "direction_id": 250167
//           },
//           "is_available": true,
//           "barcode": "4250960",
//           "price": 49500,
//           "price_not_discount": 49500,
//           "price_with_preferences": 49500,
//           "price_with_preferences_details": {
//               "details": [],
//               "discounts_sum": 0,
//               "price": 49500
//           },
//           "bonus_points_after_ordering": 2475,
//           "discount_percent": 0,
//           "full_size_name": "IT 50 | RU 50",
//           "size_for_user": "50",
//           "max_apply_bonus_points": 0,
//           "loyalty_discount": 0
//       },
//       {
//           "id": 2067198,
//           "name": "DALMINE ml24 Поло К/Р р-р 52 881149/002 Коричневый-4250961",
//           "product_id": 1393547,
//           "size": {
//               "id": 643221,
//               "name": "52",
//               "code": "52",
//               "sort": 11,
//               "direction_id": 250167
//           },
//           "is_available": false,
//           "barcode": "4250961",
//           "price": 49500,
//           "price_not_discount": 49500,
//           "price_with_preferences": 49500,
//           "price_with_preferences_details": {
//               "details": [],
//               "discounts_sum": 0,
//               "price": 49500
//           },
//           "bonus_points_after_ordering": 2475,
//           "discount_percent": 0,
//           "full_size_name": "IT 52 | RU 52",
//           "size_for_user": "52",
//           "max_apply_bonus_points": 0,
//           "loyalty_discount": 0
//       },
//       {
//           "id": 2067199,
//           "name": "DALMINE ml24 Поло К/Р р-р 56 881149/002 Коричневый-4250962",
//           "product_id": 1393547,
//           "size": {
//               "id": 643022,
//               "name": "56",
//               "code": "56",
//               "sort": 15,
//               "direction_id": 250167
//           },
//           "is_available": true,
//           "barcode": "4250962",
//           "price": 49500,
//           "price_not_discount": 49500,
//           "price_with_preferences": 49500,
//           "price_with_preferences_details": {
//               "details": [],
//               "discounts_sum": 0,
//               "price": 49500
//           },
//           "bonus_points_after_ordering": 2475,
//           "discount_percent": 0,
//           "full_size_name": "IT 56 | RU 56",
//           "size_for_user": "56",
//           "max_apply_bonus_points": 0,
//           "loyalty_discount": 0
//       },
//       {
//           "id": 2067200,
//           "name": "DALMINE ml24 Поло К/Р р-р 58 881149/002 Коричневый-4250963",
//           "product_id": 1393547,
//           "size": {
//               "id": 643024,
//               "name": "58",
//               "code": "58",
//               "sort": 17,
//               "direction_id": 250167
//           },
//           "is_available": true,
//           "barcode": "4250963",
//           "price": 49500,
//           "price_not_discount": 49500,
//           "price_with_preferences": 49500,
//           "price_with_preferences_details": {
//               "details": [],
//               "discounts_sum": 0,
//               "price": 49500
//           },
//           "bonus_points_after_ordering": 2475,
//           "discount_percent": 0,
//           "full_size_name": "IT 58 | RU 58",
//           "size_for_user": "58",
//           "max_apply_bonus_points": 0,
//           "loyalty_discount": 0
//       }
//   ],
//   "season": {
//       "id": 1151562,
//       "name": "SS24",
//       "code": "ss24"
//   },
//   "contractor": {
//       "id": 86,
//       "external_id": "81c65427-c21b-11e3-ba6f-9c8e997b926e"
//   },
//   "media_files_small": [
//       {
//           "id": 896015,
//           "width": 508,
//           "height": 678,
//           "size": 53256,
//           "name": "0_1710273646.jpg",
//           "content_type": "image/jpeg",
//           "url": "https://media2.vipavenue.ru/products/1390001_1395000/1393547/small/0_1710273646.jpg",
//           "cdn_url": "https://cdn.vipavenue.ru/products/1390001_1395000/1393547/small/0_1710273646.jpg"
//       },
//       {
//           "id": 896016,
//           "width": 508,
//           "height": 678,
//           "size": 32003,
//           "name": "1_1710273651.jpg",
//           "content_type": "image/jpeg",
//           "url": "https://media2.vipavenue.ru/products/1390001_1395000/1393547/small/1_1710273651.jpg",
//           "cdn_url": "https://cdn.vipavenue.ru/products/1390001_1395000/1393547/small/1_1710273651.jpg"
//       },
//       {
//           "id": 896017,
//           "width": 508,
//           "height": 678,
//           "size": 37329,
//           "name": "2_1710273655.jpg",
//           "content_type": "image/jpeg",
//           "url": "https://media2.vipavenue.ru/products/1390001_1395000/1393547/small/2_1710273655.jpg",
//           "cdn_url": "https://cdn.vipavenue.ru/products/1390001_1395000/1393547/small/2_1710273655.jpg"
//       },
//       {
//           "id": 896018,
//           "width": 508,
//           "height": 678,
//           "size": 51083,
//           "name": "3_1710273663.jpg",
//           "content_type": "image/jpeg",
//           "url": "https://media2.vipavenue.ru/products/1390001_1395000/1393547/small/3_1710273663.jpg",
//           "cdn_url": "https://cdn.vipavenue.ru/products/1390001_1395000/1393547/small/3_1710273663.jpg"
//       },
//       {
//           "id": 896019,
//           "width": 508,
//           "height": 678,
//           "size": 153347,
//           "name": "4_1710273670.jpg",
//           "content_type": "image/jpeg",
//           "url": "https://media2.vipavenue.ru/products/1390001_1395000/1393547/small/4_1710273670.jpg",
//           "cdn_url": "https://cdn.vipavenue.ru/products/1390001_1395000/1393547/small/4_1710273670.jpg"
//       },
//       {
//           "id": 896020,
//           "width": 508,
//           "height": 678,
//           "size": 141528,
//           "name": "5_1710273675.jpg",
//           "content_type": "image/jpeg",
//           "url": "https://media2.vipavenue.ru/products/1390001_1395000/1393547/small/5_1710273675.jpg",
//           "cdn_url": "https://cdn.vipavenue.ru/products/1390001_1395000/1393547/small/5_1710273675.jpg"
//       }
//   ],
//   "section_path": [
//       {
//           "name": "Одежда",
//           "url": "/clothes/"
//       },
//       {
//           "name": "Поло",
//           "url": "/clothes/polo/"
//       },
//       {
//           "name": "Поло с коротким рукавом",
//           "url": "/clothes/polo/short-sleeve/"
//       }
//   ],
//   "model_parameters": "187/88/79/101, размер на модели – 50",
//   "physical_dimensions": null,
//   "participates_in_promotions": true,
//   "photo_labels": [],
//   "card_texts": [],
//   "plu_products": [],
//   "three_step_promotion": {
//       "show_block": false,
//       "text": "Товар участвует в акции \"Super Sale\""
//   },
//   "additional_params": null,
//   "hide_fitting_conditions": false
// }