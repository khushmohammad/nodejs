const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')

const schema = mongoose.Schema;
const model = mongoose.model

const custSchema = new schema({
    name: String
})
const custModal = new model('customers', custSchema)

router.get('/', (req, res) => {

    const cust = custModal.find({})
    cust.then((doc) => {
        res.send(doc);
        res.end()
    })
})

router.get('/:id', (req, res) => {

    console.log(req.params.id)
    // res.send("dd");
    // res.end()

    const cust = custModal.findOne({"_id":req.params.id})
    cust.then((doc) => {
        res.send(doc);
        res.end()
    })
})


router.post('/', (req, res) => {

    console.log(req.body);
    const custinsert = new custModal(req.body)
    custinsert.save(() => {
        res.send(req.body)
        res.end()
    })

})

router.put('/:id', (req, res) => {

    console.log(req.body);
    const id = req.params.id
    //const custinsert = new custModal()
    custModal.findByIdAndUpdate(id, req.body,
        (err, data) => {
            if (err) {
                console.log("error");
                res.send("error")
            }
            else {
                console.log("data updated");
                res.send("ok")
            }

            res.end()
        }
    )

})

router.delete('/:id', (req, res) => {

    // console.log(req.body);
    const id = req.params.id
    // console.log(id);

    custModal.findByIdAndDelete(id, (err, data) => {
        if (err) {
            res.send("data not found");
        }
        else {
            res.send("deleted")
        }
        res.end()
    });




})


module.exports = router