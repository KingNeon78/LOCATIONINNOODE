const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ProfileUP')
  .then(() => console.log('Connected!')).catch ((err)=>{
    console.log("database errro ", err)
  });
