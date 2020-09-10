const express = require('express');
const router = express.Router();
const quizService = require('../services/quiz.service');

router.delete('/:id/:category' , (req,res,next) => {
    quizService.deleteById(req,res);
});

router.get('/',(req,res,next)=>{
    quizService.getAll(req,res);
});

router.get('/:id/:category',(req,res,next)=>{
    quizService.getById(req,res);
});


router.post('/',(req,res,next)=>{
    quizService.save(req,res);
});

router.put('/:id/:category' , (req,res,next) => {
    quizService.update(req,res);
});


module.exports = router;
