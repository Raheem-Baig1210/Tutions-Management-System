const express = require("express")
const admin_cntrls = require("../controllers/admin_cntrls")

const router = express.Router()

router.post("/register",admin_cntrls.register)
router.post("/login",admin_cntrls.login)
router.get("/getUsersList",admin_cntrls.getUsersList)


module.exports=router