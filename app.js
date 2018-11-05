var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var bodyParser = require('body-parser');
var localStrategy = require('passport-local');
var passportlocalMongoose = require('passport-local-mongoose');
var User  = require('./models/User');
var index = require('./routes/index');
var user_settings = require('./routes/user_settings'); 

mongoose.connect("mongodb://localhost:27017/Users",{useNewUrlParser: true});
var app = express();

app.use(require('express-session')({
    secret: "Dolore quis dolor id nostrud",
    resave: false,
    saveUninitialized:false 
}));

app.use(express.static('public'))
app.set('view engine','ejs');
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended:true}));

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
   res.locals.user = req.user;
   next();
})

app.use(index);
app.use(user_settings);

app.listen(3000,function(){
  console.log("server started")
})