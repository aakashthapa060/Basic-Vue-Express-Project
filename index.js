const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const Todos = require("./models/Todos");
const connectDB = require("./database/connect");
const app = express();
dotenv.config();

// Middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req,res) => {
	res.json({message: "Behold The MEVN Stack!"});
})

app.get("/todos", async (req,res) => {
	try {
		const todos = await Todos.find({});
		res.status(200).json({todos})
	} catch(e) {
		// statements
		console.log(e);
	}
})

app.post("/todos", async (req, res) => {
	const {taskName} = req.body;
	try {
		const todo = await Todos.create({taskName});
		res.status(201).json({todo})
	} catch(e) {
		// statements
		console.log(e);
	}
})

// Server
const PORT = process.env.PORT || 4000;
const DATABASE_PORT = process.env.DATABASE_PATH;
app.listen(PORT, () => {
	connectDB(DATABASE_PORT);
	console.log(`Listening on ${PORT}`);

})