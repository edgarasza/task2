const db = require('../models');

exports.search = async (req,res,next) =>{
    try{
         let search = await db.Search.create(req.body)
         let {id,searchResult} = search
        res.status(200).json({
            id,
            searchResult
        })
    }
    catch(error){
        return next ({
            status:400,
            message:error.message
        })
    }

}