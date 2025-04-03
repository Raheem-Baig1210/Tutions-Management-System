const express = require("express")
const user_ctrl = require("../controllers/user_cntrl")

const router = express.Router()

router.post("/signup",user_ctrl.signup)
router.post("/login",user_ctrl.login)
router.post("/attedance",user_ctrl.MarkAttendance)
router.post("/addStudent",user_ctrl.createStudent)
// router.post("/attendance",user_ctrl.attendence)

// router.post("/register",user_ctrl.register)


module.exports = router