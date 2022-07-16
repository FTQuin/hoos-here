import styles from '../styles/dashboard.module.css'

import CourseCard from "../components/CourseCard";
import Header from '../components/Header';

export default function Dashboard(){
    //TODO: integrate database
    let courses = [
        {'name': 'MNGT 1710', 'id': '123123'},
        {'name': 'PHYC 0101', 'id': '12343'},
        {'name': 'BUSN 1100', 'id': '2342'},
    ];

    return(
        <>
            <Header />
            <div id={styles.main}>
                <h2>Courses:</h2>
                <div id={styles.courseList}>
                    {courses.map((course) => (
                        <CourseCard course_name={course['name']} key={course['id']} />
                    ))}
                </div>
                <div>
                    <button>Add Course</button>
                </div>
            </div>
        </>
    );
}