const mongoose = require('mongoose');

// Students table / collection
const StudentsSchema = new mongoose.Schema({
    studentFirstName:{
        type: String,
        required: true
    },
    studentLastName:{
        type: String,
        required: true
    },
    studentBirthday:{
        type: String,
        required: true
    },
    studentEmail:{
        type: String,
        required: true
    },
    studentAddress:{
        type: String,
        required: true
    },
    studentGender:{
        type: String,
        required: true
    }
});

const Students = mongoose.model('Students', StudentsSchema);
module.exports = Students;

