import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

// const express = require("express"); // "type": "commonjs"
import express from "express"; // "type": "module"
const app = express();
import { MongoClient } from "mongodb";
app.use(express.json())

console.log(process.env.MONGO_URL)
const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL); // dial
// Top level await
await client.connect(); // call
console.log("Mongo is connected !!!  ");




const PORT = 4000;
app.get("/", function (request, response) {
    response.send("Mentor and Student Database");
});

app.get("/alldata", async function (request, response) {
    const alldata = await client
        .db("MSdb")
        .collection("data")
        .find({})
        .toArray();
    response.send(alldata);
});

app.get("/students", async function (request, response) {
    const sdata = await client
        .db("MSdb")
        .collection("Students")
        .find({})
        .toArray();
    response.send(sdata);
});

app.get("/mentors", async function (request, response) {
    const mdata = await client
        .db("MSdb")
        .collection("Mentor")
        .find({})
        .toArray();
    response.send(mdata);
});

//to add mentor
app.post("/mentors/add", async function (request, response) {
    //db.movies.find({})
    const mentordata = request.body;
    const addmdata = await client
        .db("MSdb")
        .collection("Mentor")
        .insertMany([mentordata]);
    response.send(addmdata);

});

app.put("/alldata/:mentorname", async function (request, response) {
    const mentorname = request.params.mentorname;
    const mentordata = request.body;
    const studentname = mentordata.map(
        async ({ student_name }) =>
            await client
                .db("MSdb")
                .collection("data")
                .deleteMany({ student_name: student_name })
    );
    const obj = mentordata.map(
        async (ment) =>
            await client
                .db("MSdb")
                .collection("data")
                .updateMany(
                    { mentor_name: mentorname },
                    { $push: { students: ment } }
                )
    );

    response.send(obj);
}
);



app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));