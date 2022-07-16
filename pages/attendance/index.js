import React from "react";
import Header from "../../components/Header";
import styles from "./attendance.module.css"
export default function Nothing() {

    return(
        <>
            <Header />
            <div id={styles.main}>
                <form >
                    <div>
                    <label htmlFor="sName">Name: </label>
                    <input id="sName" name="sName" type="text" autoComplete="sName" required />
                    </div>
                    <div>
                    <label htmlFor="name">Student Number: </label>
                    <input id="sNumber" name="sNumber" type="text" autoComplete="sNumber" required />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    );
}