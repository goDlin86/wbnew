
export default async function handler(req, res) {
  const { q } = req.query

  const url = 'https://search.wb.ru/exactmatch/ru/male/v4/search?curr=rub&dest=12358291&fkind=1&page=1&query=' + q + '&regions=80,64,38,4,115,83,33,68,70,69,30,86,40,1,66,48,110,22,31,114,111&resultset=catalog&sort=newly&spp=24&suppressSpellcheck=false'
  const r = await fetch(url)
  const data = await r.json()

  res.status(200).json(data)
}
