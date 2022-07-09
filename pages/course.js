import VoterList from "../components/VoterList";


export default function CoursesPage() {

    let votes = {};
    votes.docs = ['yes', 'no', 'yes', 'yes'];

    function testList() {
        return (
            <>
                <h1>Are You Here?</h1>

                <div style={{flexDirection: "row", display: "flex"}}>
                    <button
                        style={{fontSize: 32, marginRight: 8}}
                        onClick={() => addVoteDocument("yes")}
                    >
                        ✔️
                    </button>
                    <h3>
                        People Here:{" "}
                        {
                            votes?.docs?.filter(
                                (doc) => doc === "yes"
                            ).length
                        }
                    </h3>
                </div>
                <div style={{flexDirection: "row", display: "flex"}}>
                    <button
                        style={{fontSize: 32, marginRight: 8}}
                        onClick={() => addVoteDocument("no")}
                    >
                        ❌️
                    </button>
                    <h3>
                        People Away:{" "}
                        {
                            votes?.docs?.filter(
                                (doc) => doc === "no"
                            ).length
                        }
                    </h3>
                </div>

                <div style={{marginTop: "64px"}}>
                    <h3>Class:</h3>
                    <div
                        style={{
                            maxHeight: "320px",
                            overflowY: "auto",
                            width: "240px",
                        }}
                    >
                        {votes?.docs?.map((doc) => (
                            <>
                                <VoterList id={12} vote={doc} key={12}/>
                            </>
                        ))}
                    </div>
                </div>
            </>
        );
    }

    return testList();

}