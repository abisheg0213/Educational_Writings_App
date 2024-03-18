const express=require('express')
const cors=require('cors')
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/WriteUps')
app=express()
app.use(cors())
app.use(bodyparser.json())
app.listen(5000)
app.get('/',(req,res)=>{
    res.send("hello world")
})
writeUpSchema=mongoose.Schema({
    username:String,
    title:String,
    desc:String,
    Content:String,
    topics:[],
    published_date:String,
    stars:Number
})
user_schema=mongoose.Schema({
    username:String,
    password:String,
    post_count:Number
})
user_model=mongoose.model('user',user_schema)
writeup_model=mongoose.model('writeup',writeUpSchema)
app.post('/signup',function(req,res){
   
    user_model.find({username:req.body.user_name}).then((data)=>{
        if(data.length==1){
            res.send("Username already Exists")
        }
        else{
            user=new user_model({
                username:req.body.user_name,
                password:req.body.password,
                post_count:0
            })
            user.save()
            res.send("Signed up successfully")
        }
    })
})
app.post('/signIn',function(req,res){
    console.log(req.body)
    user_model.find({username:req.body.uname,password:req.body.pass}).then((data)=>{
        console.log(data)
        if(data.length==1){
            console.log("****")
            res.send("Logged In Successfully")
        }
        else{
            res.send("Log In failed")
        }
    })
})
