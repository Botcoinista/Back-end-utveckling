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


//Find all cases
exports.getAllCases = (req, res) => {
    Case.find()
        .populate('comments')
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

// Find a case just by id without updating
exports.getSingleCase = (req, res) => {
    Case.findById(req.params.id)
        .populate('comments')
        .then(cases => res.status(200).json(cases))
        .catch(err => res.status(500).json({
            message: 'Something went wrong when getting task you wanted.',
            err: err.message
        }))
}


// Find and update a case by ID
exports.getSingleCaseAndUpdate = (req, res) => {
    const id = req.params.id;
    const { statusId } = req.body;

    let updateObj = {};
    let currentStatus = '';

    if (statusId == "1") {
        updateObj = { 'status.id': 1 };
        currentStatus = 'Not done';
    } else if (statusId == "2") {
        updateObj = { 'status.id': 2 };
        currentStatus = 'On going';
    } else if (statusId == "3") {
        updateObj = { 'status.id': 3 };
        currentStatus = 'Done';
    } else {
        return res.status(400).json({
            message: 'Invalid status ID'
        });
    }

    updateObj['status.currentStatus'] = currentStatus;

    Case.findByIdAndUpdate(id, updateObj, { new: true })
        .populate('status.id')
        .populate('comments')
        .then(cases => {
            if (!cases) {
                return res.status(404).json({
                    message: 'Could not find that subject'
                })
            }
            return res.status(201).json(cases)
        })
        .catch(err => {
            return res.status(500).json({
                message: 'Something went wrong when getting cases by ID',
                err: err.message
            })
        })
}


