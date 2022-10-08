

exports.getcontact= (req,res)=>{
    res.render("contact",{ title:"have your last GTR !",
  
});
}

exports.getnews= (req,res)=>{
  res.render("post",{info:"hello world!", title:"this is my page",
});
}