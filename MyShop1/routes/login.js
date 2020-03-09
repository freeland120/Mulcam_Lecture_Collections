const express=require('express');
const router=express.Router();
const {contactRouter, members}=require('./contact');

router.post('/',(req,res)=>{
    //console.log(req.body);
    let message;
    for(let i=0;i<members.length;i++){    
        if(members[i].email==req.body.email){
            message="login ok";
            req.session.email=req.body.email;
            const my_basket=[];
            req.session.basket=my_basket;
            break;
        }
    }
    if(!message){
        message="login fail";
    }
    res.json({message}); 
    
});


module.exports=router;