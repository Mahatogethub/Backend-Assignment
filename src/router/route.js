const express = require('express') ;

const router = express.Router() ;

const customerController = require('../controller/customerController') ;

const cardController = require('../controller/cardController')


router.post('/customer' , customerController.createCustomer) ;

router.get('/customer' , customerController.createCustomer) ;

router.delete('/customer' , customerController.createCustomer) ;


router.post('/card' , cardController.createCard) ;

router.get('/card' , cardController.getCard)

// router.get('/*' , (req,res)=>{
//   return res.status(400).send({status:false , message : 'path not found'})
// })

module.exports = router ; 