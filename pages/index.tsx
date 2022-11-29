import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          <Link href={'/state-manegement'}>State Manegement</Link>
        </p>
        <p className={styles.description}>
          <Link href={'/async-state-manegement'}>Async State Manegement</Link>
        </p>
      </main>
    </div>
  )
}

export default Home
