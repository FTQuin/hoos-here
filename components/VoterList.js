import React, { ReactElement } from "react";

function VoterList({ id, vote }) {

    return (
        <div
            style={{
                maxWidth: "320px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            }}
        >
            <img
                style={{
                    borderRadius: "50%",
                    maxHeight: "48px",
                    marginTop: "8px",
                    marginRight: "8px",
                }}
            />
            <div>
                <h4 style={{ marginBottom: 0 }}>{id}</h4>
                <h4 style={{ marginTop: 0 }}>
                    Status: {vote === "yes" ? "✔️" : "❌️"}
                </h4>
            </div>
        </div>
    );
}

export default VoterList;