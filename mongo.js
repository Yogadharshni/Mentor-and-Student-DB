db.room_entries.find({})

db.Students.insertMany([
    {
        "id": 10,
        "student_name": "Swathi",
        "language": "tamil",
        "batch": "b42wd2"
    },
    {
        "id": 11,
        "student_name": "Yoga",
        "language": "tamil",
        "batch": "b42wd2"
    },
    {
        "id": 12,
        "student_name": "Dharshan",
        "language": "tamil",
        "batch": "b42wd2"
    },
    {
        "id": 13,
        "student_name": "Sridhar",
        "language": "tamil",
        "batch": "b42wd2"
    },
    {
        "id": 14,
        "student_name": "Suresh",
        "language": "tamil",
        "batch": "b42wd2"
    },
    {
        "id": 15,
        "student_name": "Abi",
        "language": "tamil",
        "batch": "b42wd2"
    },
    {
        "id": 16,
        "student_name": "Divyaa",
        "language": "tamil",
        "batch": "b42wd2"
    },
    {
        "id": 17,
        "student_name": "Sree",
        "language": "tamil",
        "batch": "b42wd2"
    }
])

db.data.insertMany([
    {
        "mentor_name": "Rupan",
        "id": "120",
        "batch": "b42wd2",
        "students": [
            {
                "student_name": "Swathi",
                "batch": "b42wd2"
            },
            {
                "student_name": "Yoga",
                "batch": "b42wd2"
            }
        ]
    },
    {
        "mentor_name": "ragavkumar",
        "id": "121",
        "batch": "b42wd2",
        "students": [
            {
                "student_name": "Dharshni",
                "batch": "b42wd2"
            },
            {
                "student_name": "Dharshan",
                "batch": "b42wd2"
            }
        ]
    },
    {
        "mentor_name": "Mahesh",
        "id": "122",
        "batch": "b42wd2",
        "students": [
            {
                "student_name": "Sridhar",
                "batch": "b42wd2"
            },
            {
                "student_name": "Suresh",
                "batch": "b42wd2"
            }
        ]
    },
])

db.Mentor.insertMany([
    {
        "mentor_name": "Rupan",
        "id": "120",
        "batch": "b42wd2"
    },

    {
        "mentor_name": "ragavkumar",
        "id": "121",
        "batch": "b42wd2"
    },
    {
        "mentor_name": "Mahesh",
        "id": "122",
        "batch": "b42wd2"
    }
])