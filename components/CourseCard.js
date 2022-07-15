import styles from "./CourseCard.module.css"

import React from "react";
import {useRouter} from "next/router";

export default function CourseCard({course_name}) {

    //Next.js router
    const router = useRouter();

    return(
        <>
            <div id={styles.main}>
                <h4 id={styles.title}>{course_name}</h4>
                <button onClick={() => router.push('/attendance/'+course_name)}>
                    Take attendance
                </button>
                <br/>
                <button onClick={() => router.push('/course/'+course_name)}>
                    Course Summary
                </button>
            </div>
        </>
    );
}