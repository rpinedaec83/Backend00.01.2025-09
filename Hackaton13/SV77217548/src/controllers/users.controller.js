const HttpError = require('../middlewares/httpError');

//Data en memoria.
const users = [];
let nextId = 1;

exports.listUsers = async (req, res) => {
    res.json({data: users});
};

exports.createUser = async (req, res) => {
    const {name, email} = req.body;
    const user = {
        id: String(nextId),
        name,
        email
    };
    nextId += 1;
    users.push(user);
    res.status(201).json(user);
};

exports.getUserById = async (req, res) => {
    const {id} = req.params;
    const user = users.find((item) => item.id === id);
    if (!user){
        throw new HttpError(404, 'Usuario no encontrado')
    }
    res.json(user);
};
