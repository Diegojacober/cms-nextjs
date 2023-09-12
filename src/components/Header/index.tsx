import styles from './styles.module.scss';
import Image from 'next/image';
import logo from '@/../public/images/logo.svg';
import Link from 'next/link';

export default function Header() {
    return(
        <header className={styles.headerConteiner}>
            <div className={styles.headerContent}>
                <a>
                    <Image src={logo} alt='Sujeito programador logo' />
                </a>

                <nav>
                    <Link href="/">
                        <span>Home</span>
                    </Link>

                    <Link href="/posts">
                        <span>Conteudo</span>
                    </Link>

                    <Link href="/sobre">
                        <span>Quem somos?</span>
                    </Link>
                </nav>

                <a type='button' className={styles.readyButton} href="https://sujeitoprogramador.com">COMEÇAR</a>
            </div>
        </header>
    )
}