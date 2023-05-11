import '@/styles/globals.css'

export default function Layout({ children }) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <title>WB new</title>
    </head>
      <body>
        {children}
      </body>
    </html>
  )
}