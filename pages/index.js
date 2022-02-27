import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import PageLayout from '../styles/components/PageLayout'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [articles, setArticles] =useState([])

    useEffect(() => {
      fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-01-27&sortBy=publishedAt&apiKey=311be6f7ef0e44c5a8ec33f44ecd2613')
      .then(response  => response .json())
      .then(response =>{
        const {articles} = response
        setArticles(articles)
      })
    },[])


  return (
    <PageLayout>
      <div className={styles.container}>
        {articles.length === 0 && <p>Loading...</p>}
        {articles.length > 0 && articles.map((article, index) =>(
          <article key={index}>
            <img src={article.urlToImage}/>
            <h2>{article.title}</h2>
            <p>
            {article.description}
            </p>
           </article>
         
        ))}

    </div>
    </PageLayout>
  )
}
