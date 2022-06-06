const express = require('express');
const myhelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/test-me', function (req, res) {
   externalmodule.welcome()
    myhelper.printdate()
    myhelper.getcurrentmonth()
    myhelper.getcohortdata()
    validatormodule.trim()
    validatormodule.changetolower()
    validatormodule.changetouppercase()
    
});

router.get('/hello', function (req, res) {
let allmonths = ['january','feburary','march','april','may','june','july','august','september','october','november','december']

    console.log(lodash.chunk(allmonths,4))

    let oddnumbers = [1,3,5,7,9,11,13,15,17,19,21,23,25]
    
    console.log(lodash.tail(9,oddnumbers))
});


module.exports = router;
// adding this comment for no reason