const db = require('../models');
const User = db.User;
const Post = db.Post;

exports.addPost = async(req,res)=>{
    let post = req.body;
    post.UserId = req.params.authorId;
    post.slug = convertToSlug( post.title);
    console.log(post);
    Post.create(post).then(data=>{
        res.status(201).send(data);
    }).catch(error=>{
        res.status(500).send({message:error})
    })
}

function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}