import styles from './Header.module.css'
import logoPic from '../public/hoos-here-logo.png'

import Image from 'next/image'
import { Router, useRouter } from 'next/router'

export default function Header(){
    
    //Next.js router
    const router = useRouter();

    return(
        <>
            <header id={styles.main}>
                <div id={styles.left} onClick={() => router.push('/')}>
                    <Image
                        id={styles.logo} src={logoPic}
                        height = "100%"
                        width = "100%"
                        alt="🐦"
                    />
                    <h1 id={styles.title}>Hoos Here</h1>
                </div>
                <div id={styles.right}>
                    <p>Mark Adam 🧑</p>
                </div>
            </header>
        </>
    );
}