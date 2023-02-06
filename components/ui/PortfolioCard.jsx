import Image from 'next/image'
import React, { useState } from 'react'
import style from 'src/styles/PortfolioCard.module.css'

const PortfolioCard = ({ card }) => {
  return (
    <article className={style.cardContainer}>
      <a href='#'>
        <header className={style.cardTitles}>
          <h2>{card.title}</h2>
          <p>{card.descShort}</p>
        </header>
        <main className={style.cardImage}>
          <Image
            src={`https://res.cloudinary.com/caraje/image/upload/v1661251659/${card.img}`}
            alt={`Es una imagen que hace referencia al proyecto ${card.title}`}
            width={390}
            height={390}
          />
        </main>
      </a>
    </article>
  )
}

export default PortfolioCard
