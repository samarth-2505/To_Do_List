const express=require('express');

const router=express.Router();
const homeController=require('../controllers/home_controller');

console.log('Router loaded');

router.get('/',homeController.home);
router.post('/add-task',homeController.add);
router.post('/delete-tasks',homeController.del);

router.use('/user',require('./user'));

module.exports=router;