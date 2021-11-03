const exp=require('express')
const userapp=exp.Router()
const ExpressAsyncHandler=require('express-async-handler')
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')

userapp.use(exp.json())

userapp.post('/createuser',ExpressAsyncHandler(async(req,res)=>
{
    let usercollectionobj=req.app.get('usercollectionobj')
    let user=req.body
    let searchUser=await usercollectionobj.findOne({username:user.username})
    if(searchUser!==null)
    {
        res.send({message:"This user already exists!",userobj:searchUser,userobj1:user})
    }
    else
    {
        let hashpassword=await bcryptjs.hash(user.password,7)
        user.password=hashpassword
        await usercollectionobj.insertOne(user)
        res.send({message:"your account is created succefully :)"})
    }
}))


userapp.post("/login",ExpressAsyncHandler(async(req,res)=>
{
    let usercollectionobj=req.app.get("usercollectionobj")
    let user=req.body
    let searchuser=await usercollectionobj.find({username:user.username})
    if(searchuser===null)
    {
       res.send({message:'Invalid access',obj:searchuser})
    }
    else
    {
        // let pv=await bcryptjs.compare((user.password).toString(),searchuser.password)
        // if(pv===false)
        // {
        //     res.send({message:'Invalid password........'})
        // }
        // else
        // {
            let signedToken=jwt.sign({username:user.username},'abcde',{expiresIn:150})
            res.send({message:'login success',token:signedToken,
            username:user.username,userobj:user,userOccup:user.userOccup})
        // }
    }
}))


module.exports=userapp