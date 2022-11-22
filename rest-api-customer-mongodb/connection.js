const mongoose = require('mongoose')
//mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://username:khush123@managment.nnuq9uk.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((res) => {
    console.log("connection success");
})