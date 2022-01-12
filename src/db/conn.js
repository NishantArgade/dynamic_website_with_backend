const mongoose = require("mongoose");

// Connecting with Local mongodb(mongodb Compass):
mongoose.connect("mongodb+srv://nishant:8007896396@cluster0.cmesc.mongodb.net/database?retryWrites=true&w=majority")
	.then(() => {
		console.log("Successful Connection with local mongodb...");
	})
	.catch(() => {
		console.log("Fail Connection with local mongodb!");
	});

//Connecting with Online mongodb(mongodb Atlas):
//pass and dbName must be which you set at mongodb Atlas.
// const pass= 8007896396;
// const dbName = mydatabase;
// const DB = `mongodb+srv://nishant_03:${pass}@cluster0.dnuhd.mongodb.net/${dbName}?retryWrites=true&w=majority`;
// mongoose.connect(DB)
// 	.then(() => {
// 		console.log("Connection Successful with OnlineMongodb");
// 	})
// 	.catch(() => {
// 		console.log("Connection fail with OnlineMongodb");
// 	});