module.exports = (req,res,next)=>{
    const { items , amount } = req.body;
    if(!items || !amount) return res.status(400).json({error: "Faltan datos requeridos"});
    next();
}