var express = require("express");
let bcrypt = require("bcrypt");
var multer = require("multer");

const { createUserToken, validateUsertoken } = require("../auth/userAuth");
const {
  addUser,
  findUserByEmail,
  submitApplication,
  getApplicatinByUserId,
} = require("../controllers/user");
const User = require("../model/user");
const { isUserLogged } = require("../middlewares/userVarify");
var router = express.Router();


/* GET users listing. */
router.post("/signup", async (req, res) => {
  try {
    let { body } = req;
    let isUserExists = await findUserByEmail(body.email);
    if (!isUserExists) {
      body.password = bcrypt.hashSync(body.password, 10);
      let user = await addUser(body);
      let tokenInput = { id: user._id, name: user.name };
      let userToken = await createUserToken(tokenInput);
      res.json({
        status: true,
        userToken,
        user: { name: user.name, id: user._id, email: user.email },
      });
    } else res.json({ status: false, message: "User already exists" });
  } catch (error) {
    res.json(error).status(500);
  }
});
router.post("/login", async (req, res) => {
  try {
    let { body } = req;
    let userExits = await findUserByEmail(body.email);
    if (userExits) {
      let passwordMatch = bcrypt.compareSync(body.password, userExits.password);
      if (!passwordMatch) {
        res.json({ status: false, message: "Password Mismatch" });
        return;
      }
      if (userExits.isBaned) {
        res.json({ status: false, message: "You are Blocked" });
        return;
      }
      let tokenInput = { id: userExits._id, name: userExits.name };
      let userToken = await createUserToken(tokenInput);
      res.json({
        status: true,
        userToken,
        user: {
          name: userExits.name,
          id: userExits._id,
          email: userExits.email,
        },
      });
    } else res.json({ status: false, message: "You don't have Account" });
  } catch (error) {
    res.json(error);
  }
});

router.post("/varify", async (req, res) => {
  try {
    if (req.headers.usertoken) {
      let data = await validateUsertoken(req.headers.usertoken);
      data ? res.json({ status: true, data }) : res.json({ status: false });
    } else res.json({ status: false, message: "No User Tocken" });
  } catch (error) {
    res.json({ message: "Inernal Server err" });
  }
});

router.post("/slotBooking", async (req, res) => {
  try {
    let { body } = req;
    let objForServer = { ...body };
    delete objForServer.image;
    let data = await submitApplication(objForServer);
    res.json(data);
  } catch (error) {
    res.json({ status: false, message: "internal sever error" });
  }
});

router.get("/prevApplications/:id", async (req, res) => {
  try {
    let { params } = req;
    let data = await getApplicatinByUserId(params.id);
    res.json({ status: true, data });
  } catch (error) {
    res.json({ status: false, message: "internal sever error" });
  }
});

router.post("/imageUpload/:id", (req, res) => {
    //     /* image upload multer start*/
  // multer configaration
  const upload = multer({
    storage: multer.diskStorage({
      destination: "./public/uploads/",
      filename: function (req, file, cb) {
        cb(null, req.imageName);
      },
    }),
  }).single("image");

  req.imageName = `${req.params.id}.jpg`;
  upload(req, res, (err) => {});
    //     /* image upload multer end*/
  res.json("done");
});
module.exports = router;
