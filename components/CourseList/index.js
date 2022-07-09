import React, { ReactElement } from "react";
import CourseCard from "../CourseCard";

export default function CourseList() {

    let courses = [{'name': 'MNGT1710', 'id': '123123'}, {'name': 'SEXED101', 'id': '696969'}];

    return (
        <div>
            <h3>Courses:</h3>

            <div>
                {courses.map((course) => (
                    <CourseCard course_name={course['name']} key={course['id']} />
                ))}
            </div>
        </div>
    );
}
