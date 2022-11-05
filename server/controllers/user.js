const ApplicatinForm = require("../model/applicationForm");
const Slots = require("../model/slots");
const User = require("../model/user");

module.exports = {
  addUser: (user) => {
    return new Promise((resolve, reject) => {
      new User(user)
        .save()
        .then((data) => resolve(data))
        .catch((error) => {
          throw error;
        });
    });
  },
  findUserByEmail: (email) => {
    return new Promise((resolve, reject) => {
        User.findOne({email}).then(data => resolve(data))
        .catch((error=>reject(error)))
    })
  },
  findUserById: (_id) => {
    return new Promise((resolve, reject) => {
        User.findOne({_id}).then(data => resolve(data))
        .catch((error=>reject(error)))
    })
  },
  findAllusers:()=>{
    return new Promise((resolve, reject) => {
      User.find().then(data=>resolve(data))
      .catch(error=>resolve(error))
    })
  },
  findUserPaginated:(limitValue,skipValue)=>{
    return new Promise((resolve, reject) => {
    User.find().limit(limitValue).skip(skipValue)
    .then(data=>resolve(data))
    .catch(error=>resolve(error))
    })
  },
  updateUserById:(_id,obj)=>{
    return new Promise((resolve, reject) => {
      User.updateOne({_id},{$set:{...obj}})
      .then(data=>resolve(data))
      .catch(error=>reject(error))
    })
  },
  submitApplication:(obj)=>{
    return new Promise((resolve, reject) => {
     new ApplicatinForm(obj).save()
     .then(data=>resolve(data))
     .catch(error=>reject(error))
    })
  },
};
