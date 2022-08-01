const {Schema,model} = require("mongoose");

const todoSchema = new Schema({
	taskName: {
		type: String
	}
})

const TodoModel = model("todos", todoSchema);

module.exports = TodoModel