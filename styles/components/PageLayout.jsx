import Head from "next/head"

export default function PageLayout({children, title='Noticias - Home'}) {
 return (
    <>
    <Head>
        <title>{title}</title>
        <meta name="description" content="Crear noticias con nextjs" />
        <link rel="icon" href="/calendario.png" />
    </Head>
    <main>
   {children}
    </main>
  </>
)

}