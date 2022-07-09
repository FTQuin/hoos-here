import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useEffect, useRef, useState } from "react";
// Import the useAuthStateHook
import { useRouter } from 'next/router';

export default function Home() {

    //Next.js router
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Hoos Here</title>
            </Head>
            <div
                style={{
                    display: "flex",
                    height: "100vh",
                    width: "100vw",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gridGap: 8,
                    background:
                        "linear-gradient(180deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
                }}
            >
                {
                    <>
                        <button onClick={() => router.replace('/dashboard')}>
                            Go to the feedback page and not go back
                        </button>
                    </>
                }
            </div>
        </>
    );
}

