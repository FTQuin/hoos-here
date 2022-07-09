import CourseList from "../components/CourseList";
import {useState} from "react";
import NewCourseForm from "../components/NewCourseForm";

export default function Dashboard(){
    let user = true;
    // output
    return(
        <div>
            {user &&
            <>
                <div style={{
                    display: "flex",
                    height: "100vh",
                    width: "100vw",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gridGap: 8,
                    background:
                        "linear-gradient(180deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
                }}>
                    <CourseList />

                    <div>
                        <button onClick={() => auth.signOut()}>Sign Out</button>
                        <button>Add Course</button>
                    </div>
                </div>
            </>
            }
        </div>
    );
}