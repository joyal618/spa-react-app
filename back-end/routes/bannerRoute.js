const bannerData =require("../models/banner.json");


const router = require("express").Router()

router.get("/", (req,res) =>{
    try{
        if(bannerData.length>0){
            return res.status(200).send(bannerData)
        }
        else{
            return res.status(204).send("No banners present")
        }
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})


module.exports = router;