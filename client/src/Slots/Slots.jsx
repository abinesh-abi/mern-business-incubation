import React from 'react'

function Slots({color,updateSlot,index,slotItem}) {
    let col = color || '#889C9B'
  return (
    // <div  data-bs-toggle="modal" data-bs-target="#staticBackdrop" key={index} onClick={()=>updateSlot('A',index,'helloooo',true)} class="p-2 flex-fill text-white m-1" style={{height:'120px',background:slotItem.isAlloted && '#5C8C46'||'#889C9B'}}><p>Slot</p></div>
    <div onClick={()=>alert('hello')} class="p-2 flex-fill text-white m-1" style={{height:'120px',background:col}}><p>Slot</p></div>
  )
}

export default Slots