const express = require("express");
const Postcont = require("../controllers/contact");
const router = express.Router();


module.exports =() =>{

router.get("/",(req,res)=>{
    res.render("index",{title:"WELCOME !"});
});
router.get("/contact",Postcont.getcontact);
router.get("/post",Postcont.getnews);
    return router;
}

