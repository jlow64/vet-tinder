const router = require("express").Router();

router.post("/" ,(req,res) => {
    let address = req.body.address;
    let radius = req.body.radius;
});

module.exports = router;