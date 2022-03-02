const express = require('express');
let coupondata = require('../database/dataCoupon');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(req.query);
    const section = req.query.section;

    const data = section ? coupondata.filter(coupon => coupon.section === section) : coupondata;
    
    res.status(200).json(data);
});

module.exports = router;