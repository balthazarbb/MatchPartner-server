const express = require('express')
const router = express.Router()
const UserModel = require('../models/User.model')
const MatchModel = require('../models/Match.model')

router.patch('/matchespart/:id', (req, res)=>{
  const userId = req.session.loggedInUser._id //three params
  console.log(req.params.id)
  MatchModel.findByIdAndUpdate(req.params.id, { $push: {userId: userId } }, {new: true} )
  .then((result) => {
    console.log(result)
    req.session.loggedInUser = result
    res.status(200).json(result)
  })
  .catch((err) => {
   res.status(500).json({
     error: 'user not saved to match'
   })
  });
})




module.exports = router;