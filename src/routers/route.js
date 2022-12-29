const express = require("express");
const router = new express.Router();
const Student = require("../models/students");

router.use(express.json());    // this line is for handling json data while post(inserting new data) in db

// *****************Create new students******************
router.post("/students", async (req, res)=>{
    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }

});

// ****************Find All Students***********************
// router.get("/students", async (req, res) => {
//     try{
//         const studentsData = await Student.find();
//         res.status(200).send(studentsData);
//     }catch(e){
//         res.status(400).send(e);
//     }
// });


// *****************Find Single Student by Id******************

router.get("/students/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const singleStudent = await Student.findById({_id: id});
        res.status(200).send(singleStudent);
    }catch(e){
        res.status(400).send(e);
    }
});


// *****************Find Single Student by Name******************

// router.get("/students/:name", async (req, res) => {
//     try{
//         const naam = req.params.name;
//         const singleStudent = await Student.find({name: naam});
//         res.status(200).send(singleStudent);
//     }catch(e){
//         res.status(400).send(e);
//     }
// });


// *****************Find Single Student by Id and Update******************

// router.patch("/students/:id", async (req, res) => {
//     try{
//         const _id = req.params.id;
//         const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
//             new: true
//         });
//         res.status(200).send(updateStudent);
//     }catch(e){
//         res.status(404).send(e);
//     }
// });


// *****************Find Single Student by NAME and Update******************

// router.patch("/students/:name", async (req, res) => {
//     try{
//         const naam = req.params.name;
//         const updateStudent = await Student.findOneAndUpdate({name: naam},req.body, {
//             new: true
//         })
//         res.status(200).send(updateStudent);
//     }catch(e){
//         res.status(404).send(e);
//     }
// });


// *****************Find Single Student by Id and Delete******************

router.delete("/students/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id);
        if(!_id){
            return res.status(404).send();
        }
        res.status(200).send(deleteStudent);
    }catch(e){
        res.status(500).send(e);
    }
});

module.exports = router;