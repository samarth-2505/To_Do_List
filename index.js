const express=require('express');
const app=express();
const port=8000;

//acquiring the database
const db=require('./config/mongoose');
const Task=require('./models/task');


//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());
app.use(express.static("assets"));

//use express router
app.use('/',require('./routes'));


app.listen(port,function(err){
  if(err)
  {
      console.log(`Error in running the server : ${err}`); //here we used interpolation , we can also write it as console.log('Error in running the server : ', err); 
      return;
  }
  console.log(`Server is up and running on port : ${port}`);
});