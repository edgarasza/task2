const db = require('../models');

exports.viewed = async (req,res,next) =>{
    try{
         let viewed = await db.Viewed.create(req.body)
         let {id,publishedAt,title, description, thumbnail} = viewed
        res.status(200).json({
            id,
            publishedAt,
            title, 
            description, 
            thumbnail
        })
    }
    catch(error){
        return next ({
            status:400,
            message:error.message
        })
    }

}