import React from "react";
import {useRouter} from "next/router";

function CourseCard({course_name}) {

    //Next.js router
    const router = useRouter();

    return(
        <div
            style={{
                padding: "10px",
                width: "320px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                border: "1px solid red",
                background:
                    "linear-gradient(180deg, rgba(238,0,202,1) 0%, rgba(148,187,0,1) 100%)",
            }}
        >
            <div>
                <h4 style={{margin: 0}}>{course_name}</h4>
                <button onClick={() => router.replace('/attendance/'+course_name)}>Take attendance</button>
                <br/>
                <button>Course Summary</button>
            </div>
        </div>
    );
}

export default CourseCard;