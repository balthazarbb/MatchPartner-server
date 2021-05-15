
const express = require('express')
const router = express.Router()

let MatchModel = require('../models/Match.model')

//API routes start from /api 

// will handle all GET requests to http:localhost:5005/api/matches
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

// will handle all POST requests to http:localhost:5005/api/create

router.post('/create', (req, res) => {  
    const {sports, dateAndTime, duration, numberOfParticipants, equipment} = req.body;
    console.log(req.body)  //how to pass userID??
    MatchModel.create({sports, dateAndTime, duration, numberOfParticipants, equipment})
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Oh nooooo',
                    message: err
               })
          })  
})

// will handle all GET requests to http:localhost:5005/api/todos/:matchId
//PS: Don't type :todoId , it's something dynamic, 
router.get('/matches/:matchId', (req, res) => {
    MatchModel.findById(req.params.matchId)
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

// will handle all DELETE requests to http:localhost:5005/api/todos/:id
router.delete('/matches/:id', (req, res) => {
    TodoModel.findByIdAndDelete(req.params.id)
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
    const {sports, dateAndTime, duration, numberOfParticipants, equipment} = req.body;
    TodoModel.findByIdAndUpdate(id, {$set: {sports, dateAndTime, duration, numberOfParticipants, equipment}}, {new: true})
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


