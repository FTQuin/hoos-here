import styles from './course.module.css';
import Header from '../../components/Header';

import { useRouter } from "next/router";
import StudentList from '../../components/StudentList';


export default function Course(classData) {
    
    const router = useRouter();
    let course_name = router.query.id;

    return(
        <>
            <Header />
            <div id={styles.main}>
                <h1>{course_name}<span>⚙️</span></h1>
                <div id={styles.stud}>
                    <StudentList />
                </div>
                
            </div>
        </>
    );
}