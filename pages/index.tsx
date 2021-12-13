import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";

const Home: NextPage = () => {
  let [val, setVal] = useState(0)

  const readStorage = () => {
    let val = parseInt(window.localStorage.getItem('boom') || '0')
    if (isNaN(val)) {
      val = 0
    }

    val += 1;

    setVal(val)

    window.localStorage.setItem('boom', `${val}`)
  }

  useEffect(() => {
    readStorage();

    window.addEventListener('storage', (event) => {
      if (event.key === 'boom') {
        readStorage();
      }
    })
  }, [])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Boom!
        </h1>

        <h2>
          If you have only opened a single tab/window, everything works nice and easy.

          But I dare you to open another tab of this app...
        </h2>

        <p className={styles.description}>
          {val}
        </p>

      </main>
    </div>
  )
}

export default Home
