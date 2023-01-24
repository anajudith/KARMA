import React from 'react'
import ButtonStyle from '../Button'
import Titulo from '../Titulo'
import styles from './Footer.module.scss'
import logo from './logo.png'
import icon from './whatsapp.png'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img src={logo} alt="Teste"/>
        <div className={styles.titulo}>
        <Titulo titulo="Nosso endereço" />
        <p>Rua São Bento, 67
          <br/>Marilandia, Ibirité - MG
        </p>
        <p>31 - 999999999</p>
        <ButtonStyle text="Como chegar" />
        </div>
        <div className={styles.titulo}>
        <Titulo titulo="Fale com um dos nossos funcionários"/>
        <img src={icon}/>
        </div>
      </div>
    </footer>
  )
}

export default Footer