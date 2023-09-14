import styles from '@/styles/Home.module.css'

export const brandlyProduct = ({ p, i }) => {
  return (
    <a className={styles.card} href={`https://www.brandly.ru/p/${p.slug}`} target='_blank' key={i}>
      <img
        className={styles.cardimg}
        src={p.thumbnail.webp}
        alt={p.name}
      />

      <div className={styles.carddesc}>
        <div>{p.name}</div>
        <div style={{ 
          color: '#DBFF00',
        }}>
          {new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(p.prices.base)}
        </div>
      </div>
    </a>
  )
}