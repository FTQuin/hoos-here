import styles from '../styles/dashboard.module.css'

import CourseCard from "../components/CourseCard";
import Header from '../components/Header';

export default function Dashboard(){
    //TODO: integrate database
    let courses = [
        {'name': 'MNGT1710', 'id': '123123'},
        {'name': 'SEXED101', 'id': '696969'},
        {'name': 'MNGT17102', 'id': '12312343'},
        {'name': 'SEXED1014', 'id': '69692369'},
        {'name': 'MNGT17105', 'id': '12343123'},
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