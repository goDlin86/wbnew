import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const q = searchParams.get('q')
  const market = q.split('-')[0]
  const brand = q.split('-')[1]

  //default wb market
  let url = 'https://search.wb.ru/exactmatch/ru/male/v5/search?ab_testing=false&appType=1&curr=rub&dest=12358291&fkind=1&query=' + brand + '&resultset=catalog&sort=newly&spp=30&suppressSpellcheck=false&uclusters=2'
  let body = {}

  switch (market) { 
    case 'brandly':
      url = 'https://api.brandly.ru/api/ext/kt-api-extensions/catalog/product/loadCategoryProducts'
      //default asos-design
      let id = 18598
      if (brand === 'zara') {
        id = 17976
      }
      if (brand === 'topman') {
        id = 19197
      }
      if (brand === 'collusion') {
        id = 19788
      }
      if (brand === 'weekday') {
        id = 20823
      }
      body = {
        "size": 40,
        "query": {
          "pol": "muzhskoy"
        },
        "from": 0,
        "includeFields": null,
        "excludeFields": null,
        "sort": [
          { "availability": "desc" }
        ],
        "searchRules": null,
        "slug": "/brands/" + brand,
        "productsFor": "catalog",
        "mainQuery": {
          "term": {
            "category_ids": id
          }
        }
      }
      break

    case 'brd':
      url = 'https://www.brd.ru/cat/novaya-kollektsiya?fgender=2&ajax=3'
      break

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
      url = 'https://unicorngo.ru/api/catalog/product?sort=by-relevance&fit=MALE&fit=UNISEX&categorySlug=footwear&page=1&perPage=40' //category: footwear, apparel
      break
  }

  const r = market === 'wb' || market === 'brd' || market === 'ls' || market === 'un' ? 
    await fetch(url) :
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(body)
    })

  try {
    const data = await r.json()
    return NextResponse.json(data)
  } catch (e) {
    console.log(e)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}