/*om namah shivaya*/

const exp=require('express')
const app=exp()
const path=require('path')
const mc=require('mongodb').MongoClient


/*---------------------------connecting front and backend-------------------------*/
app.use(exp.static(path.join(__dirname, './dist/hackproj/')))


/*-------------------api's-------------*/
const userapp=require("./API'S/userapi")
const doctorapp=require("./API'S/doctorApi")


/*------------------database url-----------------*/
//const databaseurl='mongodb://stress_management:stress@shankari-shard-00-00.y5ud8.mongodb.net:27017,shankari-shard-00-01.y5ud8.mongodb.net:27017,shankari-shard-00-02.y5ud8.mongodb.net:27017/?ssl=true&replicaSet=atlas-6eowk0-shard-0&authSource=admin&retryWrites=true&w=majority'
const databaseurl='mongodb://pedroMern:pedroMern@shankari-shard-00-00.y5ud8.mongodb.net:27017,shankari-shard-00-01.y5ud8.mongodb.net:27017,shankari-shard-00-02.y5ud8.mongodb.net:27017/?ssl=true&replicaSet=atlas-6eowk0-shard-0&authSource=admin&retryWrites=true&w=majority'
/*------------------connecting to database-----------------*/
mc.connect(databaseurl,{useNewUrlParser:true,useUnifiedTopology:true},(err,client)=>
{
    if(err)
    {
        console.log('error in connecting to database :((', err)
    }
    else
    {
        let databaseobj=client.db("hackprojdb")
        let usercollectionobj=databaseobj.collection("userscollection")
        let doctorcollectionobj=databaseobj.collection("doctorcollection")
        console.log("connected to database :))))))")

        app.set("usercollectionobj",usercollectionobj)
        app.set("doctorcollectionobj",doctorcollectionobj)
    }
})

/*-------------------middlewares to connect router's------------------*/
app.use("/user",userapp)
app.use("/doctor",doctorapp)


/*-----------------checking if path is correct or wrong--------------------*/
app.use((req, res, next) => {

    res.send({ message: `path ${req.url} is invalid..................` })
})

/*-----------------assingning port number-----------------*/
const port=4200
app.listen(port,()=>console.log(`server listening in ${port}...............`)) 