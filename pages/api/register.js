export default function handler(req, res) {
    // res.status(200).json({ user: 'Ada Lovelace' })
    db.collection("users/"+user?.uid+"/courses").add({courseName:"Test3"})
}