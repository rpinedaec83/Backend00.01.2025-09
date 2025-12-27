module.exports = function requireJson(req, res, next){
    const methodsWithBody = ['POST', 'PUT', 'PATCH'];
    if (!methodsWithBody.includes(req.method)){
        return next()
    };
    // Bloquea peticiones sin content-type(application/json).
    const contentType = req.headers['content-type'] || '';
    if (!contentType.includes('application/json')){
        return res.status(415).json({ error: 'Content-Type must be application/json' })
    };

    return next();
};
