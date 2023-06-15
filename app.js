var express = require('express')
var bodyParser = require('body-parser')
require('dotenv').config();
var app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//Testing app

var users=[]

app.put("/changeemail",(req,res) =>{
        users.forEach((item) =>{
                if(item.id == req.body.id){
                        item.email = req.body.email
                }
        })
        res.send("Updated")
})


app.get("/getalluser",(req,res) =>{
	console.log(users)
        res.send(JSON.stringify(users))
})



app.put("/changeusername",(req,res) =>{
	users.forEach((item) =>{
		if(item.id == req.body.id){
			item.username = req.body.username
		}
	})
	res.send("Updated")
})


app.post("/getuserbyid",(req,res) =>{
	user=users.filter((item) =>{	if (item.id == req.body.id) {return true} else{return false }})
	res.send(JSON.stringify(user))
//	res.send("User details")
})


app.post("/getuserbyname",(req,res) =>{
        user=users.filter((item) =>{    if (item.name == req.body.name) {return true} else{return false }})
        res.send(JSON.stringify(user))
//      res.send("User details")
})

app.post("/delete",(req,res) =>{
        user=users.filter((item) =>{    if (item.id != req.body.id) {return true} else{return false}})
	users = user
	res.send("User Deleted")
})


app.post("/register",(req,res) =>{
	console.log(req.body)
	users.push(req.body)
	res.send("Registration successful")
})

app.get("/",(req,res) =>{
	res.send("hello");
})

const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
	console.log(`Server running at ${PORT}`);
})
