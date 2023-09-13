import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const q = searchParams.get('q')

  const url = 'https://api.brandly.ru/api/ext/kt-api-extensions/catalog/product/loadCategoryProducts'
  const data = {
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
      },
      {
        "sort_price": "asc"
      }
    ],
    "searchRules": null,
    "slug": "/brands/asos",
    "productsFor": "catalog",
    "mainQuery": {
      "term": {
        "category_ids": 20027
      }
    }
  }
  const r = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data)
  })
  try {
    const data = await r.json()
    return NextResponse.json(data)
  } catch (e) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

