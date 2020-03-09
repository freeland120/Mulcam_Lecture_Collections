const express=require('express');
const router=express.Router();

router.post('/',(req,res)=>{
    //console.log(req.body);
    if(req.session.email){
        const my_basket=req.session.basket;
        my_basket.push(req.body.product);
    }
    res.json({message:req.session.basket});
});

module.exports=router;