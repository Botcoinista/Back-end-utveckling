const Case = require("../schemas/todoSchema")


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
                message: "Something went wrong when creating the case",
                err: err.message
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
                message: 'Something went wrong when getting cases',
                err: err.message
            })
        })
}

//

exports.getSingleCase = (req, res) => {
    Case.findById(req.params.id)
        .then(cases => res.status(200).json(cases))
        .catch(err => res.status(500).json({
            message: 'Something went wrong when getting task you wanted.',
            err: err.message
        }))
}



exports.getSingleCaseAndUpdate = (req, res) => {
    Case.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(cases => {
            if (!cases) {
                res.status(404).json({
                    message: 'Could not find that subject'
                })
                return
            }
            res.status(200).json(cases)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Something went wrong when getting cases by ID',
                err: err.message
            })
        })
}



