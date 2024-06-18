import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { IoHome } from "react-icons/io5";

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>Helena Rezende</span>
            </Link>
            <nav>
                <Link to="/"><IoHome className={styles.icone}/></Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/contatos">Contatos</Link>
            </nav>
        </header>
    )    
}

export default Header
