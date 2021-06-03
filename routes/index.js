const express=require('express');

const router=express.Router();
const controllers=require('../controllers/controllers');

console.log('Router loaded');

router.get('/',controllers.home);

module.exports=router;