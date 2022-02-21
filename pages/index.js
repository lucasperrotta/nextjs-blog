import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>23 years old, squizo brazillian =D <br/> 
        My main interest:  
          <ul>
            <li>Hip Hop</li>
            <li>Technology and Computer Science</li>
            <li>Mental Health</li>
          </ul>
          Actually i'm graduating Analys and Development of Systens on IFSP and helps the world being a Junior Engineer Software at K4D team</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
