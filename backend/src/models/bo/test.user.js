const test_user_dao = require("../dao/test.user.js");

let getAllUser = () => {
    return test_user_dao.getAllUser()
}

module.exports = {
    getAllUser
}