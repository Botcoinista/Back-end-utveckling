const Case = required("../schemas/todoSchemas")



exports.createNewCase = (req, res) => {

    // const title = req.body.title

    if(!subject) {
        res.status(400).json({
            message: "You need to add a subject"
        })
        return
    }

    if(!email) {
        res.status(400).json({
            message: "You need to add an email"
        })
        return
    }

    if(!message) {
        res.status(400).json({
            message: " You need to add a message"
        })
        return
    }
    
    Case.create({ subject, email, message })
    .then((Case) => {
        res.status(201).json(Case)
    } )
    .catch(err => {
        res.status(500).json({
            message: "Something went wrong when creating the case"
        })
    })
    

}

