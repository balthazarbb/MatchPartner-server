
const router = require("express").Router();
const CommentModel = require("../models/Comment.model")

router.get('/comments', (req, res) => {
     CommentModel.find()
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
router.post('/create', (req, res) => {  
     const {myComment} = req.body;
     let userId = req.session.loggedInUser._id
     CommentModel.create({myComment, user: userId})
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
router.get('/comments/:commentId', (req, res) => {
                                    // commentid right?
     CommentModel.findById(req.params.commentId)
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
router.delete('/comments/:id', (req, res) => {
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
router.patch('/comments/:id', (req, res) => {
     let id = req.params.id
     const {myComment} = req.body;
     CommentModel.findByIdAndUpdate(id, {$set: {myComment}}, {new: true})
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


