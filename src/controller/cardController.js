const mongoose= require('mongoose') ;
const ObjectId = mongoose.Types.ObjectId ;

const cardModel = require('../model/cardModel') ;


const createCard = async (req , res) =>{
    try{
    const data = req.body ;

let {cardNumber ,  customerName , customerID} = data

    if(!Object.keys(data).length == 0){
        return res.status(400).send({status : false , message : 'Please provide some data'})
    }

if(!cardNumber){
    return res.status(400).send({status: false , message : "Please provide card number"})
}


if(!customerName){
    return res.status(400).send({status: false , message : "Please provide customerName"})
}

if(!customerID){
    return res.status(400).send({status: false , message : "Please provide customerId"})
}

if(!ObjectId(customerID)){
    
        return res.status(400).send({status: false , message : "Please provide valid ObjectId"})
    
}

const create = await cardModel.create(data)

return res.status(201).send({status : true , data : create})

}
catch(err){
    return res.status(500).send({status: false , message : err.message})
    
}
}


const getCard = async (req, res) => {
    let status = {status : 'Active'}

    const fetchCard = await cardModel.find(status)

    return res.status(200).send({status : true , data : fetchCard})
}

module.exports = { createCard , getCard}