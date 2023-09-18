import Link from 'next/link';
import styles from './styles.module.scss';
import Head from 'next/head';
import Image from 'next/image';

import thumbImg from '@/../public/images/thumb.png'

import { FiChevronLeft, FiChevronsLeft, FiChevronRight, FiChevronsRight } from 'react-icons/fi';

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

                    <div className={styles.buttonNavigate}>

                        <div>
                            <button>
                                <FiChevronsLeft size={25} color="#FFF"/>
                            </button>
                            <button>
                                <FiChevronLeft size={25} color="#FFF"/>
                            </button>
                        </div>

                        <div>
                            <button>
                                <FiChevronRight size={25} color="#FFF"/>
                            </button>
                            <button>
                                <FiChevronsRight size={25} color="#FFF"/>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
