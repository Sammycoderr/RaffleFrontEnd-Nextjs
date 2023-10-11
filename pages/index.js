import Head from "next/head"
// import { Inter } from "next/font/google"
// import ManualHeader from "../components/ManualHeader"
import styles from "../styles/Home.module.css"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Contract Raffle</title>
                <meta name="description" content="Our Smart Contract Raffle" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <ManualHeader /> */}
            <Header />
            <LotteryEntrance/>
            {/* create header / connect button / navbar */}
            Hello!!
            
        </div>
    )
}
