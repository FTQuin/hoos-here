import React from "react";
import styles from "./StudentList.module.css";

export default function AttendenceEntry({id, date, dataset}) {
    // use State for live changes
    const [vote, setVote] = React.useState(dataset.students[id].attendence[date]);

    function handleClick(){
        vote++;
        vote %= dataset.values.length;

        setVote(vote);
        dataset.students[id].attendence[date] = vote;
    }

    return(
        <>
            <td onClick={handleClick} className={styles.entry}>
                <p>{dataset.values[vote]}</p>
            </td>
        </>
    );
}
