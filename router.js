const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

router.post('/posting', (req,res,next)=>{

    let content = req.body;
    let data = content.data;
    let regEx = content.regEx;
    let flag = content.flag;

    let groups = data.match(new RegExp(regEx,flag))
    // groups = groups.split(",")

    res.status(200).json({groups : groups});
})

module.exports = router;

