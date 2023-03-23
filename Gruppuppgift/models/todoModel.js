const Case = required("../schemas/todoSchemas")





















































// Hitta med id och uppdatera
Case.findByIdAndUpdate(req.params.id, { subject }, { new: true })
.then(cases => {
    if(!cases) {
        res.status(404).json({
            message: 'Could not find that subject'
        })
        return
    }
res.status(200).json(cases)
})
.catch(err => {
    res.status(500).json({
        message: 'it didnt work updating the case',
        err: err.message
    })
})