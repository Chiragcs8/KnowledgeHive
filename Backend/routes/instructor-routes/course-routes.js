const express = require('express');
const {addNewCourse,
    getAllCourses,
    getCourseDetailByID,
    updateCourseById
} = require('../../controllers/instructor-controller/course-controller.js')
const router = express.Router();

router.post('/add', addNewCourse);
router.get('/get', getAllCourses);
router.get('/get/details/:id', getCourseDetailByID);
router.put('/update/:id', updateCourseById);

module.exports = router;

