const express = require("express");
const app = express();
require("./db/conn");
const User = require("./models/User");
const path = require("path");
const hbs = require("hbs");

const port = process.env.PORT || 8000;

//setting the Paths
const static_path = path.join(__dirname,"../public");
const views_path = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partial");

//use middlewares
app.use("/css",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use("/js",express.static(path.join( __dirname,"../node_modules/bootstrap/dist/js")));
app.use("/jq",express.static(path.join(__dirname,"../node_modules/jquery/dist")));

app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path))
app.set("view engine","hbs");
app.set("views",views_path)
hbs.registerPartials(partial_path);

//Set Routing:

app.get("/",(req,res)=>{
	res.render("home");
});
app.get("/about",(req,res)=>{
	res.render("about");
});
app.get("/service",(req,res)=>{
	res.render("service");
});
app.get("/gallery",(req,res)=>{
	res.render("gallery");
});
app.get("/contact",(req,res)=>{
	res.render("contact");
});

app.get("*",(req,res)=>{
	res.render("404Page");
});

app.post("/contact",async(req,res)=>{
	try{
        //   const uData = new  User({
		// 	  name:req.body.name,
		// 	  email:req.body.email,
		// 	  phone:req.body.phone,
		// 	  message:req.body.message
		//   });
                //   or
		const uData = new User(req.body);

		  //save user data into database
		const result= await uData.save();
		res.status(201).render("home");
		
	}catch(err){res.status(500).send("Invalid details!");}
});

app.listen(port,()=>{
	console.log("Listening at port",port);
})

