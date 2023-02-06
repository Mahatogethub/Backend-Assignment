const mongoose = require('mongoose') ;

const customerSchema = new mongoose.Schema({

  firstName : {
    type : String ,
    required : true 
  },

  lastName : {
    type : String ,
    required : true ,
  },

  mobileNumber : {
    type : String ,
    unique : true ,
  },

  DOB :{
     type : Date ,
     required : true
  },

  emailID : {
    type : String ,
    unique : true 
  },

  address : {
    type : String 
  },

  customerID : {
    type : String ,

  },

  status: {
    type : String ,
    enum : ['Active','InActive'] ,
    default : "Active"
  }

},{timestamps : true })

module.exports = mongoose.model('customer' , customerSchema)