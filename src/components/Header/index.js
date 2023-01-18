import logoKarma2 from './LogoKarma2.jpg'
import ButtonStyle from '../Button'
import { Link } from 'react-router-dom'
import HeaderLink from '../HeaderLink'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
        <Link to="./">
            <img src={logoKarma2} alt="Logo Karma"/>
        </Link>
        <ul>
            <HeaderLink url='./'>
                Inicio
            </HeaderLink>
            <HeaderLink url='./About'>
                Sobre
            </HeaderLink>
            <HeaderLink url='./Products'>
                Produtos
            </HeaderLink>
            <HeaderLink url='./Blog'>
                Blog
            </HeaderLink>
            <HeaderLink url='./Contato'>
                Contato
            </HeaderLink>
            <HeaderLink url='./Budget'>
                <ButtonStyle text="Orçamento" />
                <ButtonStyle text="(31) 982160678" />
            </HeaderLink>
        </ul>
    </header>
  )
}

export default Header