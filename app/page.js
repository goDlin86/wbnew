'use client'

import { useState, useEffect } from 'react'
import { createTheme, NextUIProvider, Card, Grid, Text, Row, Loading } from '@nextui-org/react'
//import { Inter } from 'next/font/google'

const theme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primary: '#cb11ab',
      secondary: '#F9CB80',
      error: '#FCC5D8',
    },
  }
})

export default function Page() {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await fetch(`https://wbnew.vercel.app/api/hello`) //http://localhost:3000
    const data = await res.json()
    setProducts(data.data.products)
  }

  return (
    <NextUIProvider theme={theme}>
      {products.length === 0 && <Loading />}
      <Grid.Container gap={2} justify="center">
        {products.map((p, i) => {
          const id = p.id.toString()
          const vol = id.slice(0, -5)
          let basket = '10'
          if (vol < 1000)
            basket = '05'
          else if (vol < 1100)
            basket = '06'
          else if (vol < 1140)
            basket = '07'
          else if (vol < 1170)
            basket = '08'
          else if (vol < 1315)
            basket = '09'

          return (
            <Grid xs={6} sm={3} key={i}>
              <Card isPressable onPress={() => window.open(`https://www.wildberries.ru/catalog/${id}/detail.aspx`, '_blank')}>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={`https://basket-${basket}.wb.ru/vol${vol}/part${id.slice(0,-3)}/${id}/images/c516x688/1.jpg`}
                    objectFit="cover"
                    width="100%"
                    height={400}
                    alt={p.name}
                  />
                </Card.Body>
                <Card.Footer css={{ justifyItems: "flex-start" }}>
                  <Row wrap="wrap" justify="space-between" align="center">
                    <Text b>{p.name + ' - ' + p.id}</Text>
                    <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                      {new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(p.salePriceU/100)}
                    </Text>
                  </Row>
                </Card.Footer>
                {/* css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                  }}*/}
              </Card>
            </Grid>
          )
        })}
      </Grid.Container>
    </NextUIProvider>
  )
}

// product
// {
//   "time1": 3,
//   "time2": 33,
//   "dist": 491,
//   "id": 150032021,
//   "root": 127156755,
//   "kindId": 1,
//   "subjectId": 184,
//   "subjectParentId": 1,
//   "name": "Рубашка",
//   "brand": "Zara",
//   "brandId": 101907,
//   "siteBrandId": 111907,
//   "supplierId": 1187496,
//   "sale": 24,
//   "priceU": 450000,
//   "salePriceU": 342000,
//   "logisticsCost": 0,
//   "saleConditions": 0,
//   "pics": 1,
//   "rating": 0,
//   "feedbacks": 0,
//   "volume": 2,
//   "isNew": true,
//   "colors": [
//     {
//       "name": "голубой",
//       "id": 11393254
//     }
//   ],
//   "sizes": [
//     {
//       "name": "42/44",
//       "origName": "S",
//       "rank": 171131,
//       "optionId": 251641480,
//       "wh": 117501,
//       "sign": "IBydtQf/2i3vxNOy6EWiOnsp+MY="
//     }
//   ],
//   "diffPrice": false
// }
