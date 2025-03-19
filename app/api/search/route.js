import { NextResponse } from 'next/server'
import * as cheerio from 'cheerio'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const q = searchParams.get('q')
  const [market, brand] = q.split('-')

  //default wb market
  let url = 'https://search.wb.ru/exactmatch/ru/male/v5/search?ab_testing=false&appType=1&curr=rub&dest=12358291&page=1&kind=1&query=' + brand + '&resultset=catalog&sort=newly&spp=30&suppressSpellcheck=false&uclusters=3&uiv=2'
  let body = {}

  switch (market) { 
    case 'oskelly':
      url = 'https://oskelly.ru/api/v2/products/filter/items'
      body = {
        "filters": {
          "oskellyChoice": true
        },
        "presets": {},
        "baseCategory": 105,
        "page": 1,
        "pageLength": 24
      }
      break

    case 'va':
      url = 'https://catalog.vipavenue.ru/api/products/get-list'
      body = {
        "where": {
          "sections": [],
          "section_path": "",
          "genders": [
            36360,
            52366
          ],
          "brands": [],
          "colors": [],
          "sizes": [],
          "is_new_collection": false,
          "is_sale": false,
          "is_new": true,
          "is_red": false,
          "selection_id": null,
          "prevent_dynamic": [],
          "products_query": null
        },
        "relations": [
          "media_files_small",
          "offers.size",
          "offers.available_rests",
          "brand",
          "contractor",
          "season"
        ],
        "page": 1,
        "order_by": "merchandising",
        "cache_tll": 600,
        "per_page": 40,
        "platform_type": "desktop_site",
        "site_gender_id": 36360,
        "site_location_id": 36822
      }
      break

    case 'ls': //lsboutique
      url = 'https://api2.lsboutique.ru/apix/v2/catalog/products/?productsType=new_season&sex=1&sort=new&page=1&limit=40&scheme=3&get_offers'
      break

    case 'tsum':
      url = 'https://api.tsum.ru/v3/catalog/search'
      body = {
        selection: "new-arrivals-men"
      }
      break

    case 'un': //unicorn
      url = 'https://unicorngo.ru/api/catalog/product?sort=by-relevance&fit=MALE&fit=UNISEX&categorySlug=footwear%2Fapparel%2Fpants&page=1&perPage=40' //category: footwear, apparel, pants
      break

    case '12': //12 storeez
      url = 'https://12storeez.com/catalog/new/mencollection?limit=20&offset=0'
      break

    case 'sv77':
      url = 'https://ru.sv77.com/api/filters-results-count'
      body = {
        path: "/men/new-arrival"
      }
      break

    case 'usmall':
      url = 'https://usmall.ru/api/google-product-variants?gender_codes[0]=m&gender_codes[1]=ua&gender_codes[2]=u&search=' + brand.replaceAll('%20', '+') + '&sort=-id&user_id=812500707.1720691103&facets_limit=1000&per-page=48'
      break

    case 'elyts':
      url = 'https://elyts.ru/catalog/man/new/filter/clear/?ajax_get=Y'
      break

    case 'square':
      url='https://squarestore.ru/catalog/apparel/'//casual-shoes/'
      break
  }

  let r

  if (market === 'square') 
    r = await fetch(url, {
      headers: {
        'Cookie': 'pageSize=30; sort=dateof; nsort=desc;'
      }
    })
  else
    r = market === 'wb' || market === 'ls' || market === 'un' || market === '12' || market === 'usmall' ? 
      await fetch(url) :
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(body)
      })

  let data

  try {
    if (market === 'square') {
      const $ = cheerio.load(await r.text())

      const items = $('.item-card').toArray().map((item) => ({
        title: $(item).find('.item-card__title').text(),
        url: $(item).find('.item-card__title').attr('href'),
        img: $(item).find('.item-product-img>img').attr('src'),
        price: $(item).find('.item-product-price').text()
      }))
      data = {items}
    } else
      data = await r.json()
    return NextResponse.json(data)
  } catch (e) {
    console.log(e)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}