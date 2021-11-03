/*om namah shivaya*/

const exp=require('express')
const app=exp()
const path=require('path')
const mc=require('mongodb').MongoClient


/*---------------------------connecting front and backend-------------------------*/
app.use(exp.static(path.join(__dirname, './dist/hackproj/')))


/*-------------------api's-------------*/
const userapp=require("./API'S/userapi")


/*------------------database url-----------------*/
const databaseurl='mongodb+srv://stress_management:stress@shankari.y5ud8.mongodb.net/hackprojdb?retryWrites=true&w=majority'

/*------------------connecting to database-----------------*/
mc.connect(databaseurl,{useNewUrlParser:true,useUnifiedTopology:true},(err,client)=>
{
    if(err)
    {
        console.log('error in connecting to database :((')
    }
    else
    {
        let databaseobj=client.db("hackprojdb")
        let usercollectionobj=databaseobj.collection("userscollection")
        console.log("connected to database :))))))")

        app.set("usercollectionobj",usercollectionobj)
    }
})

/*-------------------middlewares to connect router's------------------*/
app.use("/user",userapp)


/*-----------------checking if path is correct or wrong--------------------*/
app.use((req, res, next) => {

    res.send({ message: `path ${req.url} is invalid` })
})

/*-----------------assingning port number-----------------*/
const port=3000
app.listen(port,()=>console.log(`server listening in ${port}...............`)) 