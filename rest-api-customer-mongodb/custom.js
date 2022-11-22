const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');



mongoose.connect('mongodb+srv://username:khush123@managment.nnuq9uk.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("con");

})


const sch = new mongoose.Schema({ name: String });

const mdl = new mongoose.model('customers', sch);
// const m = new mdl({
//     name:"jhgu"
// })
// m.save();

mdl.find().then((data) => {
    console.log("GYU", data);
})



