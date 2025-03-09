const express = require("express");
const {
  getCoursesByStudentId,
} = require("../../controllers/student-controller/student-courses-controller.js")
const router = express.Router();

router.get("/get/:studentId", getCoursesByStudentId);

module.exports = router;