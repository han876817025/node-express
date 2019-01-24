'use strict';

import express from 'express'
var router = express.Router();

router.post('/login/a',(res,req)=>{
    console.log(100)
    // console.log(res)
    // console.log(res.body);
    // req.send("success")
});


export default router