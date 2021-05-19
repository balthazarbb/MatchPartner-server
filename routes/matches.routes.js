
const express = require('express')
const router = express.Router()

const MatchModel = require('../models/Match.model')

//API routes start from /api 

// will handle all GET requests to http//:localhost:5005/api/matches
router.get('/matches', (req, res) => {
     MatchModel.find()
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Oooops',
                    message: err
               })
          })         
})

 //List route, do i need extra raoue?
router.get('/list', (req, res) => {
     MatchModel.find()
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Oooops',
                    message: err
               })
          })         
})
// will handle all POST requests to http:localhost:5005/api/create

router.post('/create', (req, res) => {  
    const {sports, username} = req.body;
    console.log(req.body)  //how to pass userID??
    MatchModel.create({sports, username})
          .then((response) => {
            //console.log(sports)
               res.status(200).json(response)
          })
          .catch((err) => {
            console.log(err)
               res.status(500).json({
                    error: 'Oh nooooo',
                    message: err
               })
          })  
})

// will handle all GET requests to http:localhost:5005/api/matches/:matchId
//PS: Don't type :todoId , it's something dynamic, 
router.get('/matches/:id', (req, res) => {
    MatchModel.findById(req.params.id)
     .populate('userId')
     .then((response) => {
          res.status(200).json(response)
     })
     .catch((err) => {
          res.status(500).json({
               error: 'Something went wrong',
               message: err
          })
     }) 
})

// will handle all DELETE requests to http:localhost:5005/api/matches/:id
router.delete('/matches/:id', (req, res) => {
    MatchModel.findByIdAndDelete(req.params.id)
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })  
})

// will handle all PATCH requests to http:localhost:5005/api/todos/:id
router.patch('/matches/:id', (req, res) => {
    let id = req.params.id
    const {sports} = req.body;
    MatchModel.findByIdAndUpdate(id, {$set: {sports}}, {new: true})
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          }) 
})

module.exports = router;


/*
Line 76
, dateAndTime, duration, numberOfParticipants, equipment
and so on
 */