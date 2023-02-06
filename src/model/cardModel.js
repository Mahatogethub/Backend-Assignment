const mongoose = require('mongoose') ;

const ObjectId = mongoose.Schema.Types.ObjectId ;

const cardSchema = new mongoose.Schema({

cardNumber : {
    type : String ,
    required: true ,
},

cardType : {
    type : String ,
    enum : ['Regular' , 'Special'] ,
    default : 'Regular'
},

customerName : {
    type : String ,
    required : true
},

status : {
    type : String ,
    enum : ['Active','InActive'] ,
    default : "Active" 
},

vision : {
    type : String ,
},

customerID : {
    type : ObjectId ,
    ref : 'customer' ,
    required : true 
}


},{timestamps : true })

module.exports = mongoose.model('card' , cardSchema)