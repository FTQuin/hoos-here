import Head from 'next/head'
import styles from '../styles/index.module.css'
import React, { useEffect, useRef, useState } from "react";
// Import the useAuthStateHook
import { useRouter } from 'next/router';
import Header from '../components/Header';

export default function Home() {

    //Next.js router
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Hoos Here</title>
            </Head>
            <Header />
            <div className={styles.main}>
                <h1>
                    This is a demo of <b>Hoos Here</b>
                </h1>
                <button onClick={() => router.replace('/dashboard')}>
                    Go to demo
                </button>
            </div>
        </>
    );
}

