import Styles from './Header.module.css'
import logo from '../assets/Logo.svg'

export function Header(){
    return (
        <header className={Styles.header}>
            <img className={Styles.logo} src={logo} alt="" />
        </header>
    )
}