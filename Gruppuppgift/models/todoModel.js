const Case = required("../schemas/todoSchemas")


//Create a new case
exports.createNewCase = (req, res) => {

    const { subject, email, message } = req.body
 

    if(!subject) {
        res.status(400).json({
            message: "You need to add a subject"
        })
        return
    }


    if(!message) {
        res.status(400).json({
            message: " You need to add a message"
        })
        return
    }

    if(!email) {
        res.status(400).json({
            message: " You need to add an email"
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


exports.getAllCases = (req, res) => {
    Case.find()
    .then(Cases => {
        res.status(200).json(Cases)
    })
} 

//



// Hitta med id och uppdatera
Case.findByIdAndUpdate(req.params.id, { subject }, { new: true })
.then(cases => {
    if(!cases) {
        res.status(404).json({
            message: 'Could not find that subject'
        })
        }
        return
    })