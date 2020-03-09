const express=require('express');
const path=require('path');
const app=express();
const session=require('express-session');
const loginRouter=require('./routes/login');
const logoutRouter=require('./routes/logout');
const {contactRouter, members}=require('./routes/contact');
const basketRouter=require('./routes/basket');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(session({
    resave:false,
    saveUninitialized:true,
    secret: '미녀 강사 전은수',
    cookie : {
        httpOnly:true,
        secure:false
    }
}));


app.use('/basket',basketRouter);
app.use('/logout',logoutRouter);
app.use('/login',loginRouter);
app.use('/contact',contactRouter);


app.listen(3000,()=>{
    console.log("server ready...");
});