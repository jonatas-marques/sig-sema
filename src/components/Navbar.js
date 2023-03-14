import Image from 'next/image'
import styles from '/styles/Navbar.module.css'
import logoPic from '/public/images/globo.png'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image
                    src={logoPic}
                    width="50"
                    height="50"
                    alt="Sig Web"
                />
            </div>
            <ul className={styles.link_items}>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Usuário
                    </Link>
                </li>
            </ul>
        </nav>
    )
}