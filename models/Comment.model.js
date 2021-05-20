const { Schema, model } = require("mongoose")
const UserModel = require('../models/User.model')


const CommentSchema = new Schema({
  comment: String,
  userId: {type: Schema.Types.ObjectId, ref: 'User'},
  //timestamps: true,
});
const Comment = model("Comment", CommentSchema);

module.exports = Comment;

