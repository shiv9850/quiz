const quizRepo = require('../data/quizRepo');
quizRepo.init();

getAll = (req, res) => {
    quizRepo.getAll()
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            handleError(err, res);
        });
}

getById = (req,res) =>{
    quizRepo.getById(req.params.id,req.params.category)
    .then(result=>{
        res.status(200).send(result);
    })
    .catch(err=>handleError(err,res))
} 

update = (req,res) =>{
    quizRepo.update(req.params.id,req.params.category,req.body)
    .then(result=>{
        res.status(202).send(result);
    })
    .catch(err=>handleError(err,res))
}

deleteById = (req,res) => {
    quizRepo.deleteById(req.params.id,req.params.category)
    then(result=>{
        res.status(204).send(result);
    })
    .catch(err=>handleError(err,res))
}

save = (req, res) => {
    quizRepo.save(req.body)
        .then(result => {
            res.status(201).send(result);
        })
        .catch(err => { handleError(err, res) });
}

handleError = (err, res) => {
    res.status(500).send(err);
}


module.exports = {
    deleteById,
    getAll,
    getById,
    save,
    update
}