//promise try catch

const ayncHandler  = (fn) => {
    (req, res, next) =>{
        Promise.resolve(fn(req,res,next).catch((err) => next(err)))
    }
}



//await try catch
/*
const ayncHandler = (fn) => async(req, res, next) => {
    try{
        await fn(req,res,next)
    }
    catch(e)
    {
        res.status(err.code || 500).json({
            success:false,
            message:err.message
        })
    }
} */