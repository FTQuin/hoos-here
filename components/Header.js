import styles from './Header.module.css'
import { logoPic } from '../public/hoos-here-logo.png'

import Image from 'next/image'

export default function Header(){
    console.log("Logo: "+logoPic);
    return(
        <>
            <header id={styles.main}>
                <div id={styles.left}>
                    <img id={styles.logo}
                    src={logoPic}
                    alt="🐦" />
                    <h1 id={styles.title}>Hoos Here</h1>
                </div>
                <div id={styles.right}>
                    <p>Profile 🧑</p>
                </div>
            </header>
        </>
    );
}