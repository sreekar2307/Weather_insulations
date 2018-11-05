var express = require('express');
var router = express.Router();
var User  = require('../models/User');
var passport = require('passport');

router.get('/',function(req,res){
   if(req.isAuthenticated()) 
	     res.render('index.ejs',{set:false});
   else
      res.render('index.ejs',{set:true});  
})


/*******Routes to login a user*******/
/***************************************/


router.get("/signin",function(req,res){
  res.render("login",{wrong_crendentials :false});
})

router.post('/signin', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.render("login",{wrong_crendentials :true}); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/');
    });
  })(req, res, next);
});


/*******Routes to register a user*******/
/***************************************/

router.get("/signup",function(req,res){
	res.render("signup",{user_exists:false})
})
 
router.post("/signup", function(req,res){
   	User.register(new User({
   	username:req.body.username,	
 	first_name:req.body.first_name,
 	last_name:req.body.last_name,
    phone_number:req.body.phone_number}),req.body.password,function(err){
           if(err.name=="UserExistsError"){
            console.log("User exists error");
           	return res.render('signup',{user_exists:true});
           }
           passport.authenticate("local")(req,res,function(err){
           	res.redirect("/");
      })
	})
});

//****Logout a User*******//
//************************//

router.get('/logout',IsLoggedIn,function(req,res){
	req.logout();
	res.redirect('/');
})

function IsLoggedIn(req,res,next){
  if(req.isAuthenticated())
    return next();
  res.redirect('/signin')
}

module.exports  = router;