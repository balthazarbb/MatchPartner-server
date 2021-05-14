const express = require('express')
const router = express.Router()

let MatchModel = require('../models/Match.model')

//API routes start from /api 

// will handle all GET requests to http:localhost:5005/api/matches
router.get('/matches', (req, res) => {
     MatchModel.find()
          .then((matches) => {
               res.status(200).json(matches)
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
    const {sports, dateAndTime, Duration, numberOfParticipants, equipment} = req.body;
    console.log(req.body)  //how to pass userID??
    MatchModel.create({sports, dateAndTime, Duration, numberOfParticipants, equipment})
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
/*
// will handle all DELETE requests to http:localhost:5005/api/todos/:id
router.delete('/todos/:id', (req, res) => {
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
router.patch('/todos/:id', (req, res) => {
    let id = req.params.id
    const {name, description, completed} = req.body;
    TodoModel.findByIdAndUpdate(id, {$set: {name: name, description: description, completed: completed}}, {new: true})
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
*/
module.exports = router;