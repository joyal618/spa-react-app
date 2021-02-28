const blogData =require("../models/blog.json");


const router = require("express").Router()

router.get("/", (req,res) =>{
    try{
        console.log(blogData);
        if(blogData.length>0){
            return res.status(200).send(blogData)
        }
        else{
            return res.status(204).send("No blogs present")
        }
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})


module.exports = router;