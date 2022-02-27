import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import PageLayout from '../styles/components/PageLayout'
import styles from '../styles/Home.module.css'

export default function Home({ articles }) {

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

export async function getServerSideProps(serverSide){
  const response = await fetch('https://newsapi.org/v2/everything?q=padel&from=2022-01-27&sortBy=publishedAt&apiKey=311be6f7ef0e44c5a8ec33f44ecd2613')
  const {articles} = await response.json()
  return{
    props:{
      articles
    }
  }
}