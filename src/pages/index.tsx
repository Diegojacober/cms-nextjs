import styles from "@/styles/Home.module.scss";
import Head from "next/head";

import techsImage from "@/../public/images/techs.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Apaixonado por tecnologia - Sujeito programador</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Levando você ao próximo nível</h1>
            <span>Uma plataforma com cursos que vão do zero até o profissional na prática, direto ao ponto aplicando o que usamos no mercado de trabalho. 👊</span>
            <a href="">
              <button>COMEÇAR AGORA!</button>
            </a>
          </section>
          <img src="/images/banner-conteudos.png" alt="Conteúdos sujeito programador" />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <section>
            <h2>Aprenda criar aplicativos para Android e IOS</h2>
            <span>Você vai descobrir o jeito mais moderno de desenvolver apps nativos para IOS e Android, construindo aplicativos do zero.</span>
          </section>
          <img src="/images/financasApp.png" alt="Conteudos mobile, desenvolvimento de apps"/>
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
        <img src="/images/webDev.png" alt="Conteudos desenvolvimento de aplicações web"/>
          <section>
            <h2>Aprenda criar sistemas web</h2>
            <span>Criar sistemas web, sites usando as tecnologias mais modernas e requisitadas pelo mercado.</span>
          </section>
        </div>

        <div className={styles.nextLevelContent}>
          <Image quality={100} src={techsImage} alt="Techs image" />
          <h2>Mais de <span>15 mil</span> já levaram sua carreira ao próximo nível.</h2>
          <span>E você vai perder a chance de evoluir de uma vez por todas?</span>
          <a>
            <button>Começar agora!</button>
          </a>
        </div>

      </main>
    </>
  )
}
