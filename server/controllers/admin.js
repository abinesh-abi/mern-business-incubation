const ApplicatinForm = require("../model/applicationForm");
const Slots = require("../model/slots");

module.exports = {
  getAllApplications: () => {
    return new Promise((resolve, reject) => {
      ApplicatinForm.find().then(data=>resolve(data))
      .catch(error=>reject(error))
    });
  },
  changeApplicationStatus:(_id,status)=>{
    return new Promise((resolve, reject) => {
      ApplicatinForm.updateOne({_id},{status})
      .then(data=>resolve(data))
      .catch(error=>reject(error))
    })
  },
  deleteApplication :(_id)=>{
    return new Promise((resolve, reject) => {
      console.log(_id)
      ApplicatinForm.findOneAndRemove({_id})
      .then(data=>resolve(data))
      .catch(error=>reject(error))
    })
  },
  getAcceptedCompaies:()=>{
    return new Promise((resolve, reject) => {
      ApplicatinForm.find({status:'accepted'},{company_name:1})
      .then(data=>resolve(data))
      .catch(error=>reject(error))
    })
  },
  getSlotDetails:()=>{
    return new Promise((resolve, reject) => {
      Slots.find().then(data=>resolve(data))
      .catch(error=>reject(error))
    })
  },
  updataSlot:(feald,index,company,isAlloted)=>{
    return new Promise((resolve, reject) => {
      Slots.updateOne({},{$set:{[`${feald}.${index}.company`]:company,[`${feald}.${index}.isAlloted`]:isAlloted}})
      .then(data=>resolve(data))
      .catch(error=>reject(error))
    })
  },

};

// [
//   {company:11,isAlloted:false},
//   {company:12,isAlloted:false},
//   {company:13,isAlloted:false},
//   {company:14,isAlloted:false},
//   {company:11,isAlloted:false},
//   {company:12,isAlloted:false},
//   {company:13,isAlloted:false},
//   {company:14,isAlloted:false},
//   {company:11,isAlloted:false},
//   {company:12,isAlloted:false},
//   {company:13,isAlloted:false},
//   {company:14,isAlloted:false},
//   {company:11,isAlloted:false},
//   {company:12,isAlloted:false},
//   {company:13,isAlloted:false},
//   {company:14,isAlloted:false},
//   {company:11,isAlloted:false},
//   {company:12,isAlloted:false},
//   {company:13,isAlloted:false},
//   {company:14,isAlloted:false},
//   {company:11,isAlloted:false},
//   {company:12,isAlloted:false},
//   {company:13,isAlloted:false},
//   {company:14,isAlloted:false},
// ]

// [
//   {
// A:{company:11,isAlloted:false},
// B:{company:12,isAlloted:true},
// C:{company:13,isAlloted:false},
// D:{company:14,isAlloted:false},
// },
//   {
// A:{company:11,isAlloted:false},
// B:{company:12,isAlloted:true},
// C:{company:13,isAlloted:false},
// D:{company:14,isAlloted:false},
// },
//   {
// A:{company:11,isAlloted:false},
// B:{company:12,isAlloted:true},
// C:{company:13,isAlloted:false},
// D:{company:14,isAlloted:false},
// },
//   {
// A:{company:11,isAlloted:false},
// B:{company:12,isAlloted:true},
// C:{company:13,isAlloted:false},
// D:{company:14,isAlloted:false},
// },
//   {
// A:{company:11,isAlloted:false},
// B:{company:12,isAlloted:true},
// C:{company:13,isAlloted:false},
// D:{company:14,isAlloted:false},
// },
//   {
// y
// },
// ]

//  let hi = {
//   A:[
// {company:11,isAlloted:false},
// {company:12,isAlloted:true},
// {company:13,isAlloted:false},
// {company:14,isAlloted:false}],
//   B:[
// {company:11,isAlloted:false},
// {company:12,isAlloted:true},
// {company:13,isAlloted:false},
// {company:14,isAlloted:false}],
//   C:[
// {company:11,isAlloted:false},
// {company:12,isAlloted:true},
// {company:13,isAlloted:false},
// {company:14,isAlloted:false}],
//   D:[
// {company:11,isAlloted:false},
// {company:12,isAlloted:true},
// {company:13,isAlloted:false},
// {company:14,isAlloted:false}],
//   E:[
// {company:11,isAlloted:false},
// {company:12,isAlloted:true},
// {company:13,isAlloted:false},
// {company:14,isAlloted:false}],
//   F:[
// {company:11,isAlloted:false},
// {company:12,isAlloted:true},
// {company:13,isAlloted:false},
// {company:14,isAlloted:false}],
//   G:[
// {company:11,isAlloted:false},
// {company:12,isAlloted:true},
// {company:13,isAlloted:false},
// {company:14,isAlloted:false}],
//   H:[
// {company:11,isAlloted:false},
// {company:12,isAlloted:true},
// {company:13,isAlloted:false},
// {company:14,isAlloted:false}],
// }