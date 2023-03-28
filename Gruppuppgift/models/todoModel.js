const Case = require("../schemas/todoSchema")

// exports.createNewCase = (req, res) => {

//     if(!email || !subject || !message){
//         res.status(400).json({
//             message: 'A case must contain an email, a subject and a message!'
//         })
//         return
//     }

//Create a new case
exports.createNewCase = (req, res) => {

    const { subject, email, message } = req.body


    if (!subject) {
        res.status(400).json({
            message: "You need to add a subject"
        })
        return
    }


    if (!message) {
        res.status(400).json({
            message: " You need to add a message"
        })
        return
    }

    if (!email) {
        res.status(400).json({
            message: " You need to add an email"
        })
        return
    }


    Case.create({ subject, email, message })
        .then((Case) => {
            res.status(201).json(Case)
        })
        .catch(err => {
            res.status(500).json({
                message: "Something went wrong when creating the case"
            })
        })

}

exports.getAllCases = (req, res) => {

    Case.find()
    .then(Cases => {
        res.status(200).json(Cases)
    })
    .catch(err => {
        res.status(500).json({
            message: 'Something went wrong when getting the case'
        })
    })
} 

// Hitta med id och uppdatera
exports.getSingleCase = (req, res) => {

    Case.findById(req.params.id)
    .then(cases => {
        if(!cases) {
            res.status(404).json({
                message: 'Could not find that case'
            })
        return
        }
    res.status(200).json(cases)
    })
    .catch(err => {
        res.status(500).json({
            message: "something went wrong when getting that case",
            err: err.message
        })
    })
}
