const Teachers = require("../models/teacher");

module.exports = {
  create: async (req, res) => {
    try {
      const { name, email, gender, designation } = req.body;
      if(!name || !email || !gender || !designation){
        return res.status(400).send("Required fields cannot be empty");
      }
      const genderValues = await Teachers.rawAttributes.gender.values;
      if(!genderValues.includes(gender)){
        return res.status(400).send("Invalid Gender value");
      }
      const teacher = await Teachers.create({
        name: name,
        email: email,
        designation: designation,
        gender: gender,
      });
      res.status(200).send("Teacher Created Successfully!");
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  },
//   getStudent: async (req, res) => {
//     try {
//       const studentId = Number(req.params.studentId);
//       if(isNaN(studentId)) {
//         return res.status(400).send("Invalid student id");
//       }
//       const student = await Students.findByPk(studentId);
//       res.status(200).send({ student: student });
//     } catch (err) {
//       console.log(err);
//       res.status(500).send("Something went wrong");
//     }
    
//   },
  getAll: async (req, res) => {
    try {
      const teachers = await Teachers.findAll({
        // where: {
        //   gender: "Female",
        //   verified: true,
        // },
        // attributes: ["name", "email", "gender"]
        order: [['id', 'DESC']],
        limit: 3
      });
      res.status(200).send({ teachers});
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
},


//   updateStudent: async (req, res) => {
//     try {
//       const {name, phone_number} = req.body;
//       const studentId = Number(req.params.studentId);
//       if(isNaN(studentId)) {
//         return res.status(400).send("Invalid student id");
//       }
//       if(!name){
//         return res.status(400).send("Name is required!");
//       }
      
//       const student = await Students.findByPk(studentId);
//       if(!student){
//         return res.status(400).send("Invalid student id");
//       }
//       await Students.update({
//         name: name,
//         phone_number: phone_number,
//       }, {
//         where: {
//           id: studentId
//         }
//       });
//       res.status(200).send("Student Updated Successfully!");
//     } catch (err) {
//       console.log(err);
//       res.status(500).send("Something went wrong");
//     }
//   },
//   deleteStudent: async (req, res) => {
//     try {
//       const studentId = Number(req.params.studentId);
//       if(isNaN(studentId)) {
//         return res.status(400).send("Invalid student id");
//       }

//       const student = await Students.findByPk(studentId);
//       if(!student){
//         return res.status(400).send("Invalid student id");
//       }
//       await Students.destroy({
//         where: {
//           id: studentId
//         }
//       });
//       res.status(200).send("Student Deleted Successfully!");
//     } catch (err) {
//       console.log(err);
//       res.status(500).send("Something went wrong");
//     }
//   },




}


