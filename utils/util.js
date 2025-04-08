const  bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const path = require("path")
const multer = require("multer")


const responseGenerator = (success, message , data) => {
    let obj = {}
    obj.success=success;
    obj.message=message || (success ? "Success" : "Failed");
    if(data){
        obj.data = data
    }
    return obj
}

const hashPassword = (plainPassword) => {
    return bcrypt.hash(plainPassword,2)
}
const comparePassword = (plainPassword,hashPassword) =>{
    return bcrypt.compare(plainPassword,hashPassword)
}
const generateTokens = (data) => {
    return jwt.sign(data, process.env.SECRET_KEY, {expiresIn:"1d"})
}


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb)=>{
        const name=Date.now()+"_"+file.originalname;
        req.body.filename=name
        cb(null,name)
    }
})

const upload=multer({storage})


module.exports = {
    responseGenerator,
    hashPassword,
    comparePassword,
    generateTokens,
    storage,
    upload
}