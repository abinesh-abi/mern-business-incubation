require("dotenv").config();
let jwt = require("jsonwebtoken");
module.exports = {
  createUserToken: (val) => {
    return new Promise(async (resolve, reject) => {
      let userToken = await jwt.sign(val, process.env.JWT_USER_SECRET, {
        expiresIn: "3d"
      });
      resolve(userToken);
    });
  },
  validateUsertoken:(token)=>{
    return new Promise((resolve, reject) => {
          const data = jwt.verify(token, process.env.JWT_USER_SECRET);
          resolve(data)
    })
  }
};
