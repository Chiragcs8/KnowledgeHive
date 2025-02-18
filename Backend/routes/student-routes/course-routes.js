const express = require('express');
const { getAllStudentViewCourses, getAllStudentViewCourseDetails } = require('../../controllers/student-controller/course-controller');
const router = express.Router()

router.get('/get', getAllStudentViewCourses);

router.get('/get/details/:id', getAllStudentViewCourseDetails);

module.exports = router;