// import firebase from "../../firebase/clientApp";
// import {useAuthState} from "react-firebase-hooks/auth";
// import {useCollection} from "react-firebase-hooks/firestore";

// export default function NewCourseForm({onSuccess}) {
//     // Firestore
//     const db = firebase.firestore();

//     const [user, loading, error] = useAuthState(firebase.auth());

//     // get courses from db
//     const [courses, coursesLoading, coursesError] = useCollection(
//         db.collection("users/"+user?.uid+"/courses"), {}
//     );


//     const registerUser = async e => {
//         e.preventDefault();

//         db.collection("users/"+user?.uid+"/courses").add({courseName:e.target.name.value});

//         onSuccess();
//     }

//     return (
//         <form onSubmit={registerUser}>
//             <label htmlFor="name">Name</label>
//             <input id="name" name="name" type="text" autoComplete="name" required />
//             <button type="submit">Register</button>
//         </form>
//     )
// }