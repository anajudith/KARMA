import logo from './logo.png'
import { Link } from 'react-router-dom'
import HeaderLink from '../HeaderLink'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
        <Link to="./">
            <h3>Karma Engenharia</h3>
            {/* <img src={logo} alt="Logo Karma"/> */}
        </Link>
        <ul>
            <HeaderLink url='./'>
                Inicio
            </HeaderLink>
            <HeaderLink url='./About'>
                Sobre
            </HeaderLink>
            <HeaderLink url='./About'>
                Produtos
            </HeaderLink>
            <HeaderLink url='./About'>
                Blog
            </HeaderLink>
            <HeaderLink url='./About'>
                Contato
            </HeaderLink>
            <HeaderLink url='./About'>
                <p>(31) 982160678</p>
            </HeaderLink>
        </ul>
    </header>
  )
}

export default Header