export default function Attendance(classData) {
    let user = true;
    return(
        <div>
            {!user &&
            //not logged in aka student
            <>
                <form onSubmit={submitAttendance}>
                    <label htmlFor="sName">Name</label>
                    <input id="sName" name="sName" type="text" autoComplete="sName" required />
                    <label htmlFor="name">Student Number</label>
                    <input id="sNumber" name="sNumber" type="text" autoComplete="sNumber" required />
                    <button type="submit">Register</button>
                </form>
            </>
            }
            {user &&
            // logged in aka prof
            <>
                <h1>Test</h1>
                <p>Name: {classData.course_name}</p>

                <form onSubmit="false">
                    <label htmlFor="sName">Name</label>
                    <input id="sName" name="sName" type="text" autoComplete="sName" required />
                    <label htmlFor="name">Student Number</label>
                    <input id="sNumber" name="sNumber" type="text" autoComplete="sNumber" required />
                    <button type="submit">Register</button>
                </form>
            </>
            }
        </div>
    );
}