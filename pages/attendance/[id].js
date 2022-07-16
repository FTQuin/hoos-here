
import qr_code from "../../public/qr.png";

import Image from 'next/image'

import styles from "./attendance.module.css"
import Header from "../../components/Header";

import {useRouter} from "next/router";




export default function Attendance(classData) {
    
    const router = useRouter();
    let user = true;
    return(
        <div>
            {user &&
            // logged in aka prof
            <>
            <Header />
            <div id={styles.main}>
                <Image src={qr_code} />
            <button onClick={() => router.push('/attendance/')}>
                Student View
            </button>
            </div>
            </>
            }
        </div>
    );
}