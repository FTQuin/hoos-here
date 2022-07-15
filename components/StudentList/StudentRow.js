import React from "react";
import AttendenceEntry from "./AttendenceEntry";

export default function StudentRow({student_id, dataset}) {
    // const [student, setStudent] = React.useState(dataset.students[student_id]);
    let student = dataset.students[student_id];

    return(
        <>
            <tr>
                <td>
                    {student.name}
                </td>
                {Object.keys(student.attendence).map((date) => (
                    <AttendenceEntry date={date} id={student_id} key={date + student_id} dataset={dataset} />
                ))}
            </tr>
        </>
    );
}
