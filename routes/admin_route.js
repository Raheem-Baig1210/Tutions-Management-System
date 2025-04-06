const express = require("express")
const admin_cntrls = require("../controllers/admin_cntrls")
const user_cntrl = require("../controllers/user_cntrl")
const router = express.Router()

router.post("/register",admin_cntrls.register)
router.post("/login",admin_cntrls.login)
router.post("/createCenter",admin_cntrls.createCenter)
router.get("/getuserbyCenterid/:id",admin_cntrls.getusersbyCenterid)
router.get("/getallcenters",admin_cntrls.getallcenters)
router.get("/getAllStudents",admin_cntrls.allStudents)
router.get("/getAllStudentsAtCenter/:id",admin_cntrls.getAllStudentsAtCenter)
router.get("/getAllStudentsByTutorId/:id",admin_cntrls.getAllStudentsByTutor)
router.get("/getUsersList",admin_cntrls.getUsersList)
router.delete("/removeUser",admin_cntrls.deleteUser)
router.get("/attendanceOfAllStudents",user_cntrl.attedanceOfAllStudents)
router.get("/attendanceList",admin_cntrls.attedanceList)
router.get("/attendanceHistoryOfStudent",user_cntrl.attedanceHistoryOfStudent)
router.get("/attendanceHistory",admin_cntrls.attedanceHistory)
router.delete("/deleteAttendance",admin_cntrls.deleteAttendance)


module.exports=router