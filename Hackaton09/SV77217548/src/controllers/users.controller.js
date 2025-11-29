const bcrypt = require('bcrypt');
const {User} = require('../models');
const {AppError} = require('../utils/app-error');
const {buildPagination} = require('../utils/pagination');

async function createUser(req, res){
    const {firstName, lastName, email, password, role} = req.body;
    if (!firstName || !lastName || !email || !password){
        throw new AppError('firstName, lastName, email y password son obligatorios', 400);
    }
    const passwordHash = bcrypt.hashSync(password, 10);
    try{
        const user = await User.create({firstName, lastName, email, passwordHash, role: role || 'student'});
        res.status(201).json(user);
    } catch (err){
        if (err.name === 'SequelizeUniqueConstraintError'){
            throw new AppError('El email ya existe', 409);
        }
        throw err;
    }
}

async function listUsers(req, res){
    const {page, pageSize, offset, limit} = buildPagination(req.query);
    const where = {};
    if (req.query.role) where.role = req.query.role;
    const {rows, count} = await User.findAndCountAll({where, limit, offset, order: [['createdAt', 'DESC']]});
    res.json({total: count, page, pageSize, data: rows});
}

module.exports = {createUser, listUsers};
