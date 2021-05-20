const express = require('express')
const router = require("express").Router();
const CommentModel = require("../models/Comment.model")
const UserModel = require('../models/User.model')
const MatchModel = require('../models/Match.model')


//profile right?
router.get('/profile', (req, res, next) => {

  // or MatchModelFindByIdAndUpdate
     CommentModel.find(req.sessin.loggedInUser._id)
     //populate?
          .then((comments) => {
               res.status(200).json(comments)
          })
          .catch((err) => {
          res.status(500).json({
               error: 'Something went wrong',
               message: err
               })
          })         
})           
router.post('/createcomment', (req, res, next) => {  
     const {newComment} = req.body;
     console.log(newComment)
     CommentModel.create(newComment)
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
router.get('/comment/:id', (req, res) => {
                                    // commentid right?
     CommentModel.findById(req.params.userid)
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
router.delete('/comment/:id', (req, res) => {
     CommentModel.findByIdAndDelete(req.params.id)
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
router.patch('/comment/:id', (req, res) => {
     let id = req.params.id
     const {myComment} = req.body;
     CommentModel.findByIdAndUpdate(id, {$push: {myComment}}, {new: true})
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
