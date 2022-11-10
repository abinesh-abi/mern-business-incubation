import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CONFIG from "../../config/config";
import Slots from "../../Slots/Slots";

function BookingSlotComponent() {


  let [slots,setSlots] = useState({A:[],B:[],C:[],D:[],E:[],F:[],G:[],H:[]})
  let [companyData,setCompanyData] = useState([{}])
  let [choosedSlot,setChoosedSolt] = useState({})
  let [modalData,setModalData] = useState()
  let navigator = useNavigate()

  function getSlotsDetails() {
    axios.get(`${CONFIG.SERVER_URL}/admin/getSlots`).then(({ data }) => {
      setSlots(data.data[0])
    });
  } 
  
function acceptedCompanies() {
    axios.get(`${CONFIG.SERVER_URL}/admin/acceptedCompanies`)
    .then(({data})=>{
      setCompanyData(data.data)
    })
}
  useEffect(()=>{
    getSlotsDetails()
    acceptedCompanies()
  }, [slots.isAlloted]);
  

  function updateSlot() {
    let body = {...choosedSlot,company:modalData,isAlloted:modalData?true:false}
    axios.patch(`${CONFIG.SERVER_URL}/admin/updateSlote`,body)
    .then(({data})=>{
      getSlotsDetails()
    })
  }


  return (
    <>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 id="hi" className="heading-section"> Booking Slots </h2>
            </div>


            {/* botton */}
              {/* <a
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={()=>setChoosedSolt({feald:'A',index:2,company:'super company',isAlloted:true})}
              >
                View Details
              </a> */}




          </div>
          <div className="container">
          {/* A,B */}
          <div className="d-flex ">
            <div className="d-flex mb-3 flex-fill text-center">
              {
                slots?.A.map((slotItem,index)=>{
                   return <div  data-bs-toggle="modal" data-bs-target="#staticBackdrop" key={index} onClick={()=>setChoosedSolt({feald:'A',index:index})} class="p-2 flex-fill text-white m-1" style={{height:'120px',width:'50px',background:slotItem.company && '#5C8C46'||'#889C9B'}}><p>{slotItem.company || 'Add new company'}</p></div>

                })
              }
            </div>
            <div className=" m-1" style={{width:'15px'}}></div>
            <div className="d-flex mb-3 flex-fill text-center align-middle">
              {
                slots?.B.map((slotItem,index)=>{
                   return <div  data-bs-toggle="modal" data-bs-target="#staticBackdrop" key={index} onClick={()=>setChoosedSolt({feald:'B',index:index})} class="p-2 flex-fill text-white m-1" style={{height:'120px',width:'50px',background:slotItem.company && '#5C8C46'||'#889C9B'}}><p>{slotItem.company || 'Add new company'}</p></div>
                  // return <div  data-bs-toggle="modal" data-bs-target="#staticBackdrop" key={index} onClick={()=>updateSlot('A',index,'helloooo',true)} class="p-2 flex-fill text-white m-1" style={{height:'120px',background:slotItem.isAlloted && '#5C8C46'||'#889C9B'}}><p>Slot</p></div>
                  //   //  <Slots updateSlot={updateSlot} key={index} color={slotItem.isAlloted && '#5C8C46'}/>
                })
              }
            </div>
        </div>
          <div className=" m-1" style={{width:'100%',height:'10px'}}></div>
          {/* C,D */}
          <div className="d-flex ">
            <div className="d-flex mb-3 flex-fill text-center">
              {
                slots?.C.map((slotItem,index)=>{
                   return <div  data-bs-toggle="modal" data-bs-target="#staticBackdrop" key={index} onClick={()=>setChoosedSolt({feald:'C',index:index})} class="p-2 flex-fill text-white m-1" style={{height:'120px',width:'50px',background:slotItem.company && '#5C8C46'||'#889C9B'}}><p>{slotItem.company || 'Add new company'}</p></div>
                    // return <Slots key={index} color={slotItem.isAlloted && '#5C8C46'}/>
                })
              }
            </div>
            <div className=" m-1" style={{width:'15px'}}></div>
            <div className="d-flex mb-3 flex-fill text-center align-middle">
              {
                slots?.D.map((slotItem,index)=>{
                   return <div  data-bs-toggle="modal" data-bs-target="#staticBackdrop" key={index} onClick={()=>setChoosedSolt({feald:'D',index:index})} class="p-2 flex-fill text-white m-1" style={{height:'120px',width:'50px',background:slotItem.company && '#5C8C46'||'#889C9B'}}><p>{slotItem.company || 'Add new company'}</p></div>
                    // return <Slots key={index} color={slotItem.isAlloted && '#5C8C46'}/>
                })
              }
            </div>
        </div>
          <div className=" m-1" style={{width:'100%',height:'10px'}}></div>
          {/* E,F */}
          <div className="d-flex ">
            <div className="d-flex mb-3 flex-fill text-center">
              {
                slots?.E?.map((slotItem,index)=>{
                   return <div  data-bs-toggle="modal" data-bs-target="#staticBackdrop" key={index} onClick={()=>setChoosedSolt({feald:'E',index:index})} class="p-2 flex-fill text-white m-1" style={{height:'120px',width:'50px',background:slotItem.company && '#5C8C46'||'#889C9B'}}><p>{slotItem.company || 'Add new company'}</p></div>
                    // return <Slots key={index} color={slotItem.isAlloted && '#5C8C46'}/>
                })
              }
            </div>
            <div className=" m-1" style={{width:'15px'}}></div>
            <div className="d-flex mb-3 flex-fill text-center align-middle">
              {
                slots?.F?.map((slotItem,index)=>{
                   return <div  data-bs-toggle="modal" data-bs-target="#staticBackdrop" key={index} onClick={()=>setChoosedSolt({feald:'F',index:index})} class="p-2 flex-fill text-white m-1" style={{height:'120px',width:'50px',background:slotItem.company && '#5C8C46'||'#889C9B'}}><p>{slotItem.company || 'Add new company'}</p></div>
                    // return <Slots key={index} color={slotItem.isAlloted && '#5C8C46'}/>
                })
              }
            </div>
        </div>
          <div className=" m-1" style={{width:'100%',height:'10px'}}></div>
          {/* G,H */}
          <div className="d-flex ">
            <div className="d-flex mb-3 flex-fill text-center">
              {
                slots?.G?.map((slotItem,index)=>{
                   return <div  data-bs-toggle="modal" data-bs-target="#staticBackdrop" key={index} onClick={()=>setChoosedSolt({feald:'G',index:index})} class="p-2 flex-fill text-white m-1" style={{height:'120px',width:'50px',background:slotItem.company && '#5C8C46'||'#889C9B'}}><p>{slotItem.company || 'Add new company'}</p></div>
                    // return <Slots key={index} color={slotItem.isAlloted && '#5C8C46'}/>
                })
              }
            </div>
            <div className=" m-1" style={{width:'15px'}}></div>
            <div className="d-flex mb-3 flex-fill text-center align-middle">
              {
                slots?.H?.map((slotItem,index)=>{
                   return <div  data-bs-toggle="modal" data-bs-target="#staticBackdrop" key={index} onClick={()=>setChoosedSolt({feald:'H',index:index})} class="p-2 flex-fill text-white m-1" style={{height:'120px',width:'50px',background:slotItem.company && '#5C8C46'||'#889C9B'}}><p>{slotItem.company || 'Add new company'}</p></div>
                    // return <Slots key={index} color={slotItem.isAlloted && '#5C8C46'}/>
                })
              }
            </div>
        </div>
          <div className=" m-1" style={{width:'100%',height:'10px'}}></div>
          
        </div>
        </div>
      </section>
      {/* bootstrap modal */}
          <div
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5
                      class="modal-title"
                      id="exampleModalScrollableTitle"
                    >
                    Choose Company
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="container">
                      <div class="form-group">


                        <select class="browser-default custom-select mb-3" onChange={(e)=>setModalData(e.target.value)}>
                          <option selected>Choose Company</option >
                            {
                              companyData.map((data,index)=>{
                               return <option value={data.company_name}>{data.company_name}</option>
                              })
                            }
                          <option value='' >Remove Company</option>
                        </select>


                      </div>
                  </div>

                <div class="modal-footer">
                  <Link to='/admin/bookinSlots'onClick={()=>{updateSlot() }}  class="btn btn-primary" data-bs-dismiss="modal">Submit</Link>
                  <Link to='/admin/bookinSlots' type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</Link>
                   </div>
              </div>
            </div>
          </div>
          

    </>
  );
}

export default BookingSlotComponent;
