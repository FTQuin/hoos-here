import React from "react";
import styles from '../../styles/Home.module.css'

export default function Nothing() {

    return(
        <div
            style={{
                display: "flex",
                height: "100vh",
                width: "100vw",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gridGap: 8,
                background:
                    "linear-gradient(180deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
            }}
        >
            <h1>hi</h1>
        </div>
    );
}