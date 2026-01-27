module.exports = (req,res,next)=>{
    const start = process.hrtime.bigint();
    res.on('finish', ()=>{
        const dur = Number(process.hrtime.bigint()-start)/1e6;
        console.log(`${req.method} ${req.url} - ${dur}ms`);
    });
    next();
}