const { findOneAndUpdate } = require('../model/customerModel');
const customerModel = require('../model/customerModel') ;


const createCustomer = async (req,res) => {

    try{
    const data = req.body ;

   let {firstName , lastName , mobileNumber , DOB , emailID , address , customerID } = data 

    if(Object.keys(data).length == 0){
        return res.status(400).send({status : false , message : 'please provide some data'}) ;
    }

    if(!firstName){
        return res.status(400).send({status: false , message : 'firstName is mendatory , Please provide firstName'})
    }

    if(!lastName){
        return res.status(400).send({status: false , message : 'lasttName is mendatory , Please provide lasttName'})
    }

    if(!mobileNumber){
        return res.status(400).send({status: false , message : 'mobileNumber is mendatory , Please provide mobileNumber'})
    }

   const uniqueMobile = await customerModel.findOne({data : mobileNumber})

   if(uniqueMobile){
    return res.status(400).send({status : false , message : 'This mobile Number already exist , Please provide another number'})
   }

    if(!DOB){
        return res.status(400).send({status: false , message : 'DOB is mendatory , Please provide DOB'})
    }

    if(!emailID){
        return res.status(400).send({status: false , message : 'emailID is mendatory , Please provide emailID'})
    }

    const uniqueEmail = await customerModel.findOne({email : emailID})

    if(uniqueEmail){
        return res.status(400).send({status : false , message : 'This email  already exist , Please provide another email'})
 
    }

    if(!address){
        return res.status(400).send({status: false , message : 'address is mendatory , Please provide address'})
    }

    if(!customerID){
        return res.status(400).send({status: false , message : 'customerID is mendatory , Please provide customerID'})
    }

    const uniqueId = await customerModel.findOne({customerId : customerID})

    if(uniqueId){
    return res.status(400).send({status : false , message : 'This mobile Number already exist , Please provide another number'})
    }


    const create = await customerModel.create(data)

    return res.status(201).send({status : true , message : 'Created Successfully' , data : create})
 
}
catch(err){
    return res.status(500).send({status:false , message : err.message })
}

}


const getCustomer = async (req,res) =>{
    try{
       
        let status = {status : Active }

        const getData = await customerModel.find(status)

        return res.status(200).send({status:true , data:getData})


    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
}


const deleteCustomer = async (req,res) => {
    try{

       const delet = await customerModel.findOneAndUpdate(
        {status : "Active",
        $set :{
           status:"InActive",
        }
    })

    return res.status(200).send({status:true , message : "Deleted successfully"})

    }
    catch(err){
        return res(500).send({status : false , message : err.message})
    }
}


module.exports = {createCustomer , getCustomer , deleteCustomer}