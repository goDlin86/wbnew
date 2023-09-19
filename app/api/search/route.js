import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const q = searchParams.get('q')
  const market = q.split('-')[0]
  const brand = q.split('-')[1]

  //wb default
  let url = 'https://search.wb.ru/exactmatch/ru/male/v4/search?TestGroup=no_test&TestID=no_test&appType=1&curr=rub&dest=12358291&fkind=1&page=1&query=' + brand + '&regions=80,38,83,4,64,33,68,70,30,40,86,69,1,31,66,22,110,48,114&resultset=catalog&sort=newly&spp=27&suppressSpellcheck=false&uclusters=8'
  let body = {}

  if (market === 'brandly') {
    url = 'https://api.brandly.ru/api/ext/kt-api-extensions/catalog/product/loadCategoryProducts'
    //asos
    let id = 20027
    if (brand === 'zara') {
      id = 17976
    }
    if (brand === 'topman') {
      id = 19197
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
        {
          "availability": "desc"
        }
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
  }

  if (market === 'brd') {
    url = 'https://www.brd.ru/cat/novaya-kollektsiya?fgender=2&ajax=3'
  }

  if (market === 'oskelly') {
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
  }

  const r = market === 'wb' || market === 'brd' ? 
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