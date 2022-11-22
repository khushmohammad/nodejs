

const express = require('express')
const router = express.Router()
const Studentdata = require("./data.js")

router.get('/', (req, res) => {
    res.json(Studentdata)
    res.end()
});

router.get('/:id', (req, res) => {
    const StudentdataOne = Studentdata.find(std => std.ID == req.params.id);
    res.send(StudentdataOne);
    res.end()
});

router.get('/:id/fees', (req, res) => {
    const StudentdataOne = Studentdata.find(std => std.ID == req.params.id)
    res.send(StudentdataOne.Fees);
    res.end()
});

router.get('/:id/result', (req, res) => {
    const StudentdataOne = Studentdata.find(std => std.ID == req.params.id)
    res.send(StudentdataOne.Result);
    res.end()
});

module.exports = router