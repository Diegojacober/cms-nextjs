import Link from 'next/link';
import styles from './styles.module.scss';
import Head from 'next/head';
import Image from 'next/image';

import thumbImg from '@/../public/images/thumb.png'

import { FiChevronLeft, FiChevronsLeft, FiChevronRight, FiChevronsRight } from 'react-icons/fi';
import { GetStaticProps } from 'next';

import { getPrismicClient } from '@/services/prismic';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom'

type Content = {
    title: string
    titleContent: string
    linkAction: string
    mobileTitle: string
    mobileContent: string
    mobileBanner: string
    webTitle:string
    webContent: string
    webBanner: string
}

interface ContentProps {
    content: Content
}

export default function Posts({ content }: ContentProps) {

    
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

export const getStaticProps: GetStaticProps = async () => {

    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.Predicates.at('document.type', 'home')
    ])

    const { title, sub_title, link_action, 
        mobile, mobile_content, mobile_banner,
        web, web_content, web_banner, } = response.results[0].data;

    const content = {
        title: RichText.asText(title),
        titleContent: RichText.asText(sub_title),
        linkAction: link_action.url,
        mobileTitle: RichText.asText(mobile),
        mobileContent: RichText.asText(mobile_content),
        mobileBanner: RichText.asText(mobile_banner.url),
        webTitle: RichText.asText(web),
        webContent: RichText.asText(web_content),
        webBanner: RichText.asText(web_banner.url),
    }

    return {
        props: {
            content
        },
        revalidate: 60 * 2
    }
}
