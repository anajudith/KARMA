import React from 'react'
import CarouselTeste from '../../components/Carousel'
import MultiCarousel from '../../components/MultiCarousel'
import styles from "./Home.module.scss"
import Container from '../../components/Container'

function Home() {
  return (
    <>
    <CarouselTeste />
    
    <Container className={styles.container}>
      <h2>Conheça nossa linha de produtos</h2>
      <hr className={styles.vertical}></hr>
      <p>Vistoria, etc etc etc?</p>
      <p>Temos a solução perfeita para o seu veículo!</p>
    </Container>

    <div><MultiCarousel></MultiCarousel></div>    
    </>
  )
}

export default Home