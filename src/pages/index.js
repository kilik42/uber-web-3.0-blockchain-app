import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const style ={
    wrapper: `h-screen w-screen flex flex-col`,

  }
  return (
    
      <div className={style.wrapper}>
        {/* navbar */}
        <div className={style.main}>
          {/* map */}

        </div>

        <div className={style.rideRequestContainer}>
          <div className={style.rideRequest}>
              {/* location selector */}
              {/* confirm ride */}


          </div>
        </div>

      </div>
    
  )
}
