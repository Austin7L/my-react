import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let links = [
    { "label": "CSS", "value": "css" }
  ];

  return (
    <>
      <Head>
        <title>Austin7L React App</title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {links.map(link => {
          return (
            <a href="/css">{link.label}</a>
          )
        })}
      </main>
    </>
  )
}
