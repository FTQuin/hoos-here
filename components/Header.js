import styles from '../styles/index.module.css'
import Image from 'next/image'
import { logoPic } from '../public/hoos-here-logo.png'

export default function Header(){
    console.log("Logo: "+logoPic);
    return(
        <>
            <div>
                <header>
                    <img
                    src={logoPic}
                    alt="Hoos Here Logo" />
                    <p>Test</p>
                </header>
            </div>
        </>
    );
}