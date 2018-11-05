var express = require('express');
var router = express.Router();
var User  = require('../models/User');

// ***** routes for profile settings ******* // 
//****************************************** /
 
router.get('/:id/settings',IsLoggedIn,function(req,res){
  if(req.user._id==req.params.id)
    res.render('user_settings',{user:req.user,password_mismatch:false});
  else
    res.send("Future error page")
})
router.post('/:id/settings/change_password',IsLoggedIn,function(req,res){
  if(req.user._id==req.params.id)
    {
       req.user.changePassword(req.body.old_password,req.body.new_password,function(err,user){
            if(err.name=="IncorrectPasswordError"){
              console.log(err);
              res.render('user_settings',{user:req.user,password_mismatch:true});
            }
            else{
              res.redirect("/");
            }
       })
    }
    else{
      res.send('Future Error page');
    }
})

router.get('/:id/settings/delete',IsLoggedIn,function(req,res){
  if(req.user._id==req.params.id)
    {
        User.deleteOne({username:req.user.username},function(err){
          if(err)
             return console.log(err);
        })
        req.logout();
        res.redirect('/');
    }
    else{
      res.send('Future Error page');
    }  
})
function IsLoggedIn(req,res,next){
  if(req.isAuthenticated())
    return next();
  res.redirect('/signin')
}

module.exports  = router;