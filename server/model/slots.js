const mongoose=require('mongoose')

const SlotSchema=new mongoose.Schema({
    A:{
        type:Array,
    },
    B:{
        type:Array,
    },
    C:{
        type:Array,
    },
    D:{
        type:Array,
    },
    E:{
        type:Array,
    },
    F:{
        type:Array,
    },
    G:{
        type:Array,
    },
    H:{
        type:Array,
    }
    // company:String,
    // isAlloted:Boolean
})

const Slots=mongoose.model('slots',SlotSchema)

module.exports=Slots;