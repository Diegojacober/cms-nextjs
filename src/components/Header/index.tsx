import styles from './styles.module.scss';
import Image from 'next/image';
import logo from '@/../public/images/logo.svg';
import Link from 'next/link';
import ActiveLink from '../ActiveLink';

export default function Header() {
    return (
        <header className={styles.headerConteiner}>
            <div className={styles.headerContent}>
                <ActiveLink href="/" activeClassname={styles.active}>
                    <Image src={logo} alt='Sujeito programador logo' />
                </ActiveLink>

                <nav>
                    <ActiveLink href="/" activeClassname={styles.active}>
                        <span>Home</span>
                    </ActiveLink>

                    <ActiveLink href="/posts" activeClassname={styles.active}>
                        <span>Conteudo</span>
                    </ActiveLink>

                    <ActiveLink href="/sobre" activeClassname={styles.active}>
                        <span>Quem somos?</span>
                    </ActiveLink>
                </nav>

                <a type='button' className={styles.readyButton} href="https://sujeitoprogramador.com">COMEÇAR</a>
            </div>
        </header>
    )
}