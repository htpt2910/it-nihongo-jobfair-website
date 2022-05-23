const test_user = require("../controller/test.user.js");

module.exports = app => {


    var router = require("express").Router();

    // Create a new test user route
    router.get("/test", test_user.getAlluser);

    app.use('/api', router);
};
