const express = require("express")
const tutor_ctrl = require("../controllers/tutor_cntrl")

const router = express.Router()

// router.post("/signup",tutor_ctrl.signup)
router.post("/login",tutor_ctrl.login)
router.post("/markAttedance",tutor_ctrl.MarkAttendance)
router.post("/addStudent",tutor_ctrl.createStudent)
router.post("/markStudentAttendance",tutor_ctrl.StudentAttendance)
router.get("/attendaceOfAllStudents",tutor_ctrl.attedanceOfAllStudents)
router.get("/attendanceHistoryOfStudent",tutor_ctrl.attedanceHistoryOfStudent)
// router.post("/attendance",tutor_ctrl.attendence)

// router.post("/register",tutor_ctrl.register)


module.exports = router