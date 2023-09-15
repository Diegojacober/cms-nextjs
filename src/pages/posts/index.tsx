import Link from 'next/link';
import styles from './styles.module.scss';
import Head from 'next/head';

import Image from 'next/image';

import thumbImg from '@/../public/images/thumb.png'

export default function Posts() {
    return(
        <>
            <Head>
                <title>Blog | sujeito programador</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <Link href="">
                        <span>
                            <Image src={thumbImg} alt='Post titlo 1' width={720} height={410} quality={100}/>
                        </span>
                        <strong>Criando meu primeiro aplicativo</strong>
                        <time>14 JULHO 2021</time>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur itaque maiores mollitia iure, assumenda vel deserunt necessitatibus atque esse deleniti tempora sint ducimus ratione molestias?</p>
                    </Link>
                </div>
            </main>
        </>
    )
}
