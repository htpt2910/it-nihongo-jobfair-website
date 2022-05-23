const test_user_bo = require("../models/bo/test.user.js");

exports.getAlluser = (req, res) => {

    test_user_bo.getAllUser()

    return res.status(200).json({
        message: "sucess",
    })

};