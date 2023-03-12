import styles from '/styles/Navbar.module.css'

export default function Navbar() {
    return (
        <ul className={styles.navbar}>
            <li>
                Home
            </li>
            <li>
                Usuário Servidor
            </li>
        </ul>
    )
}