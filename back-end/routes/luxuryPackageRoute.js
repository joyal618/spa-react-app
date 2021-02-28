const luxuryPackageData =require("../models/luxuryPackages.json");


const router = require("express").Router()

router.get("/", (req,res) =>{
    try{
        console.log(luxuryPackageData);
        if(luxuryPackageData.length>0){
            return res.status(200).send(luxuryPackageData)
        }
        else{
            return res.status(204).send("No luxury package present")
        }
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})


module.exports = router;