module.exports = (req,res,next)=>{
    console.error(err);
    res.status(err.stats || 500).json({message: err.message || "Error Interno"});
};