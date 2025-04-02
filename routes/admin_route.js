const express = require("express")
const admin_cntrls = require("../controllers/admin_cntrls")

const router = express.Router()

router.post("/register",admin_cntrls.register)
router.post("/login",admin_cntrls.login)
router.post("/createCenter",admin_cntrls.createCenter)
router.get("/getUsersList",admin_cntrls.getUsersList)
router.delete("/removeUser",admin_cntrls.deleteUser)
router.get("/attendanceList",admin_cntrls.attedanceList)
router.get("/attendanceHistory",admin_cntrls.attedanceHistory)


module.exports=router