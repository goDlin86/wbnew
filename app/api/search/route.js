import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const q = searchParams.get('q')

  const url = 'https://search.wb.ru/exactmatch/ru/male/v4/search?TestGroup=no_test&TestID=no_test&appType=1&curr=rub&dest=12358291&fkind=1&page=1&query=' + q + '&regions=80,38,83,4,64,33,68,70,30,40,86,69,1,31,66,22,110,48,114&resultset=catalog&sort=newly&spp=27&suppressSpellcheck=false&uclusters=8'
  const r = await fetch(url)
  try {
    const data = await r.json()
    return NextResponse.json(data)
  } catch (e) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}