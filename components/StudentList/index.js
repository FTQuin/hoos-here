import StudentRow from "./StudentRow";
import styles from "./StudentList.module.css";
import React, { useEffect } from "react";


// fake dataset
let dates_init = [
    new Date(2022, 6, 15).toISOString(),
    new Date(2022, 6, 16).toISOString(),
];
let students_init = {
    "1234": {
        name: "Jeff",
        attendence: {
            [dates_init[0]]: 0, [dates_init[1]]: 2,
        }
    },
    "1111": {
        name: "Bob",
        attendence: {
            [dates_init[0]]: 1, [dates_init[1]]: 1,
        }
    },
};
let values_init = ["❌️", "✔️", "🟡"];

let dataset_init = {
    "dates" : dates_init,
    "students" : students_init,
    // emojis for values here, away, undefined
    "values" : values_init,
};

export default function StudentList() {

    const [dataset, setDataset] = React.useState(dataset_init);
    const [students, setStudents] = React.useState(dataset.students);
    const [dates, setDates] = React.useState(dataset.dates);
    
    useEffect(() => {
        setStudents(old_students => {
            // get last date
            let last_date_index = dates.length - 1;
            let last_date = dates[last_date_index];

            let new_students = {
                "1234": {
                    name: "Jeff",
                    attendence: {
                        [dates_init[0]]: 0, [dates_init[1]]: 1,
                    }
                }
            }

            for (const [key, value] of Object.entries(old_students)) {
                new_students[key] = value;
                value.attendence[last_date] = 0;
            }

            return new_students;
        });
    }, [dates]);

    function addDate(){
        return setDates((past_dates) => {
            // get last day
            let last_date_index = past_dates.length - 1;
            let last_date = past_dates[last_date_index];
            last_date = new Date(last_date);
            // get next date
            let day = 24 * 60 * 60 * 1000;
            let new_date = new Date(last_date.getTime() + day);
            new_date = new_date.toISOString();
            // return new array of dates
            return past_dates.concat(new_date)
        })
    }

    return(
        <>
            <div id={styles.main}>
                <table>
                    <tbody>
                        <tr>
                            <td></td>
                            {dates.map((date) => (
                                <td key={date} className={styles.date}><p>{new Date(date).toLocaleDateString('en-CA')}</p></td>
                            ))}
                            <td onClick={addDate}>➕</td>
                        </tr>
                        {Object.keys(dataset.students).map((id) => (
                            <StudentRow key = {id} student_id = {id} dataset = {dataset} setDataset = {setDataset}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

