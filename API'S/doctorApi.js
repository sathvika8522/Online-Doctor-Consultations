//om namah shivaya

const exp=require('express')
const doctorapp=exp.Router()
const ExpressAsyncHandler=require('express-async-handler')

doctorapp.use(exp.json())

doctorapp.post("/details",ExpressAsyncHandler(async(req,res)=>
{
    doctorcollectionobj=req.app.get('doctorcollectionobj')
    let doctorDetails=req.body

    let search=await doctorcollectionobj.findOne({email:doctorDetails.email})

    if(search!=null)
    {
        res.send({present:1})
    }
    else
    {
       await doctorcollectionobj.insertOne(doctorDetails)
       res.send({message:"your details are submitted succesfully............."})
    }

}))

doctorapp.get("/getDetails",ExpressAsyncHandler(async(req,res)=>
{
    let doctorcollectionobj=req.app.get('doctorcollectionobj')
    let doctors=await doctorcollectionobj.find().toArray()

    if(doctors!=null)
    {
        res.send({message:doctors})
    }
    else
    {
       res.send({message:'no doctors available'})
    }
}))

doctorapp.post("/patientDetails",ExpressAsyncHandler(async(req,res)=>
{
    let doctorcollectionobj=req.app.get('doctorcollectionobj')
    let pDetails=req.body
    let details=req.body.patientDetails

    let doctor=await doctorcollectionobj.findOne({email:pDetails.doctorMail})
    if(doctor.patients===undefined)
    {
        doctor.patients=[]
        doctor.patients.push(details)
        await doctorcollectionobj.updateOne({email:pDetails.doctorMail},{$set:{...doctor}})
    }
    else
    {
        doctor.patients.push(details)
        await doctorcollectionobj.updateOne({email:pDetails.doctorMail},{$set:{...doctor}}) 
    }
}))









module.exports=doctorapp;
