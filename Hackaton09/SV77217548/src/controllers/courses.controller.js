const {Course, Lesson, User, Op} = require('../models');
const {AppError} = require('../utils/app-error');
const {buildPagination} = require('../utils/pagination');

function parseOrder(orderParam){
    if (!orderParam) return [['createdAt', 'DESC']];
    const [field, direction] = orderParam.split(':');
    const dir = direction && direction.toUpperCase() === 'ASC' ? 'ASC' : 'DESC';
    return [[field || 'createdAt', dir]];
}

async function createCourse(req, res){
    const {title, description, ownerId, published, metadata} = req.body;
    if (!title || !description || !ownerId) throw new AppError('title, description y ownerId son obligatorios', 400);
    const owner = await User.findByPk(ownerId);
    if (!owner) throw new AppError('Owner no encontrado', 404);
    if (metadata !== undefined && (typeof metadata !== 'object' || metadata === null)){
        throw new AppError('metadata debe ser un objeto JSON', 400);
    }
    try{
        const course = await Course.create({title, description, ownerId, published: published ?? false, metadata: metadata ?? {}});
        res.status(201).json(course);
    } catch (err){
        if (err.name === 'SequelizeUniqueConstraintError') throw new AppError('El titulo o slug ya existe', 409);
        throw err;
    }
}

async function listCourses(req, res){
    const {page, pageSize, offset, limit} = buildPagination(req.query);
    const where = {};
    if (typeof req.query.published !== 'undefined') where.published = req.query.published === 'true';
    if (req.query.q){
        const q = `%${req.query.q.trim().toLowerCase()}%`;
        where[Op.or] = [{title: {[Op.iLike]: q}}, {description: {[Op.iLike]: q}}];
    }
    const order = parseOrder(req.query.order);
    const {rows, count} = await Course.findAndCountAll({
        where,
        limit,
        offset,
        order,
        include: [{model: User, as: 'owner', attributes: ['id', 'firstName', 'lastName', 'email']}],
        distinct: true,
    });
    res.json({total: count, page, pageSize, data: rows});
}

async function getCourse(req, res){
    const course = await Course.findByPk(req.params.id, {
        include: [{model: Lesson, as: 'lessons', attributes: ['id', 'title', 'slug', 'order'], separate: true, order: [['order', 'ASC']]}],
    });
    if (!course) throw new AppError('Curso no encontrado', 404);
    res.json(course);
}

async function updateCourse(req, res){
    const course = await Course.findByPk(req.params.id);
    if (!course) throw new AppError('Curso no encontrado', 404);
    const {title, description, published, ownerId, metadata} = req.body;
    if (metadata !== undefined && (typeof metadata !== 'object' || metadata === null)){
        throw new AppError('metadata debe ser un objeto JSON', 400);
    }
    if (ownerId !== undefined){
        const owner = await User.findByPk(ownerId);
        if (!owner) throw new AppError('Owner no encontrado', 404);
    }
    try{
        await course.update({title, description, published, ownerId, metadata});
        res.json(course);
    } catch (err){
        if (err.name === 'SequelizeUniqueConstraintError') throw new AppError('El titulo o slug ya existe', 409);
        throw err;
    }
}

async function deleteCourse(req, res){
    const deleted = await Course.destroy({where: {id: req.params.id}});
    if (!deleted) throw new AppError('Curso no encontrado', 404);
    res.json({message: 'Curso eliminado (soft delete si aplica)'});
}

module.exports = {createCourse, listCourses, getCourse, updateCourse, deleteCourse};
