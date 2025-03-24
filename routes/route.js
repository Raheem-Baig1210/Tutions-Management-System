const express = require("express")
const admin_route = require("./admin_route")
const user_route = require("./user_route")

const router = express.Router();

router.use("/admin",admin_route)
router.use("/user",user_route)

module.exports=router