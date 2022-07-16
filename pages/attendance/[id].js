
import qr_code from "../../public/qr.png";

import Image from 'next/image'

import styles from "./attendance.module.css"
import Header from "../../components/Header";


export default function Attendance(classData) {
    let user = true;
    return(
        <div>
            {user &&
            // logged in aka prof
            <>
            <Header />
            <div id={styles.main}>
                <Image src={qr_code} />
            </div>
            </>
            }
        </div>
    );
}