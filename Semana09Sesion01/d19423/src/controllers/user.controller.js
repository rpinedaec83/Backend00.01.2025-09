const db = require('../models');
const User = db.User;
const bcrypt = require('bcrypt');

exports.addUser = (req,res)=>{
    const usuarioNuevo = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.passwordHash, 8)
    };
    User.create(usuarioNuevo).then(data=>{
        res.status(201).send(data)
    }).catch(error=>{
        res.status(500).send({message:error});
    })
}
