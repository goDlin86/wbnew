import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const q = searchParams.get('q')

  const url = 'https://search.wb.ru/exactmatch/ru/male/v4/search?curr=rub&dest=12358291&fkind=1&page=1&query=' + q + '&regions=80,64,38,4,115,83,33,68,70,69,30,86,40,1,66,48,110,22,31,114,111&resultset=catalog&sort=newly&spp=24&suppressSpellcheck=false'
  const r = await fetch(url)
  try {
    const data = await r.json()
    return NextResponse.json(data)
  } catch (e) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}