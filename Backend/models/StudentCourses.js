const mongoose = require('mongoose');

const StudentCorsesSchema = new mongoose.Schema({
    userId: String,
    courses : [
        {
            courseId: String,
            title : String,
            instructorId : String,
            instructorName : String,
            dateOfPurchase : Date,
            courseImage : String
        }
    ]
})

module.exports = mongoose.model('StudentCourses', StudentCorsesSchema);