const { validateUsertoken } = require("../auth/userAuth");

module.exports = {
  isUserLogged: async (req, res, next) => {
    try {
      if (req.headers.usertoken) {
        let data = await validateUsertoken(req.headers.usertoken);
        if (data) {
            // res.json({status:true})
            next()
        }else res.json({status:false,message:'Not Valied Token'})
      }
    } catch (error) {console.log(error)}
  },
};
