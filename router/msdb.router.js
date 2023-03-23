import express from "express";
import { client } from "../index.js";
const router = express.Router();


router.get("/", function (request, response) {
    response.send("Mentor and Student Database");
});

router.get("/alldata", async function (request, response) {
    const alldata = await client
        .db("MSdb")
        .collection("data")
        .find({})
        .toArray();
    response.send(alldata);
});


router.get("/students", async function (request, response) {
    const alldata = await client
        .db("MSdb")
        .collection("Students")
        .find({})
        .toArray();
    response.send(alldata);
});

// router.post("/studentss", async function (request, response) {
//     const data = request.body;
//     const sdata = await client
//         .db("MSdb")
//         .collection("Students")
//         .insertMany(data);
//     response.send(sdata);
// });




router.get("/mentors", async function (request, response) {
    const mentors = await client
        .db("MSdb")
        .collection("Mentor")
        .find({})
        .toArray();
    response.send(mentors);
});

//to add mentor
router.post("/mentors/add", express.json(), async function (request, response) {
    //db.movies.find({})
    const mentordata = request.body;
    const addmdata = await client
        .db("MSdb")
        .collection("Mentor")
        .insertMany([mentordata]);
    response.send(addmdata);

});

// router.put("/alldata/:mentorname", express.json(),async function (request, response) {
//     const mentorname = request.params.mentorname;
//     const mentordata = request.body;
//     const studentname = mentordata.map(
//         async ({ student_name }) =>
//             await client
//                 .db("MSdb")
//                 .collection("data")
//                 .deleteMany({ student_name: student_name })
//     );
//     const obj = mentordata.map(
//         async (ment) =>
//             await client
//                 .db("MSdb")
//                 .collection("data")
//                 .updateMany(
//                     { mentor_name: mentorname },
//                     { $push: { students: ment } }
//                 )
//     );

//     response.send(obj);
// }
// );
export default router;