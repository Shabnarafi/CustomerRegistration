var express = require('express');
var router = express.Router();
var customerInfo = {};

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(customerInfo){
    res.send({hasError: false,
      message: 'Data Received',
    statusCode: 200,
    payload: customerInfo});
  }
  else{
    res.send({hasError: true,
      message: 'Data Not found',
    statusCode: 200});
  }
  
});

/*POST customer Info. */
router.post('/', function(req, res, next) {
  if(req.body){
    customerInfo = req.body;
    res.send({hasError: false,
      message: 'Data stored',
      statusCode: 200});
  }
  else{
    res.send({
      hasError: true,
      message: 'Data stored Failed',
      statusCode: 404
    })
  }
  
});

module.exports = router;
