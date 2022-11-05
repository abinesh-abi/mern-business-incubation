var express = require("express");
let bcrypt = require("bcrypt");
const { createUserToken, validateUsertoken } = require("../auth/userAuth");
const { findAllusers, findUserPaginated, findUserById, updateUserById, } = require("../controllers/user");
const { getAllApplications, getSlotDetails, updataSlot } = require("../controllers/admin");
var router = express.Router();

let admin = {
  name: "Abi",
  email: "abi@gmail.com",
  password: bcrypt.hashSync("1234", 10),
};

router.post("/login", async (req, res) => {
  let { body } = req;
  try {
    // let adminExits = await findUserByEmail(body.email);
    // if (admin) {
    let passwordMatch = bcrypt.compareSync(body.password, admin.password);
    if (!passwordMatch) {
      res.json({ status: false, message: "Password Mismatch" });
      return;
    }
    let tokenInput = { name: admin.name };
    let adminToken = await createUserToken(tokenInput);
    res.json({
      status: true,
      adminToken,
      admin: {
        name: admin.name,
        email: admin.email,
      },
    });
    // } else res.json({ status: false, message: "You don't have Account" });
  } catch (error) {
    res.json(error);
  }
});

// varify
router.post("/varify", async (req, res) => {
  try {
    if (req.headers.admintoken) {
      let data = await validateUsertoken(req.headers.admintoken);
      data ? res.json({ status: true, data }) : res.json({ status: false });
    }else  res.json({status:false,message:'No User Tocken'})
  } catch (error) {
    res.json({ message: "Inernal Server err" });
  }
});


// get users
router.get('/getUsers',async(req,res)=>{
  try {
    let allUsers = await findAllusers()
    res.json({status:true,data:allUsers})
  } catch (error) {
    
  }
})

router.get('/getUserPaginated/:id',async(req,res)=>{
   try {
        // Adding Pagination
        const limitValue =  5+1;
        const skipValue = req.params.id * 5 || 0;
        let users = await findUserPaginated(limitValue,skipValue)
        .then(data=>res.send({status:true,data}))
        .catch(error=>res.send({status:false,message:"Internal Server Error"}))
    } catch (e) {
      res.json({status:false,message:"Internal Server Error"})
    }
})
router.patch('/banOrUnban',async(req,res)=>{
  try {
    let user = await findUserById(req.body.id)
    user.isBaned = !user.isBaned
    updateUserById(req.body.id,user)
    .then(data=>res.json({status:true,data}))
    .catch(error=>res.json({status:false,message:"Internal Server Error"}))
  } catch (error) {
    res.json({status:false,message:"Internal Server Error"})
  }
})
router.get("/applicationList",async(req,res)=>{
  try {
    let data = await getAllApplications()
    res.json({status:true,data})
  } catch (error) {
    res.json({status:false,message:"ineternal server error"})
  }
})
router.get("/getSlots",async(req,res)=>{
  try {
    let data = await getSlotDetails()
    res.json({status:true,data})
  } catch (error) {
    res.json({status:false,message:"internal server error"})
  }
})
router.patch('/updateSlote',(req,res)=>{
  try {
    
    let {
      feald,
      index,
      company,
      isAlloted
    } = req.body

  console.log({feald,index,company,isAlloted},'helloooooo++++++++++++')
  // let company ='this is a id'
  // let isAlloted = true
  // let index = 0
  // let feald = 'A'
  updataSlot(feald,index,company,isAlloted).then(data=>console.log(data,'updatedddddddddddddd'))
  .catch(error =>console.log(error,'erro'))
  } catch (error) {
    console.log(error)
  }
  console.log("hi there")
})

module.exports = router;
