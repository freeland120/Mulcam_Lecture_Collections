const express=require('express');
const contactRouter=express.Router();

const members=[
    { name: 'YDG', email: 'freeland120@naver.com', comments: '덕경' },
    { name: 'KauStar', email: 'freeland120@kau.ac.kr', comments: '항공스타' },    
];

contactRouter.post('/', (req,res)=>{    
    members.push(req.body);
    console.log(members);
    res.json({message:"contact ok"});
});

module.exports={contactRouter, members};