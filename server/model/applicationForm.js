const mongoose = require('mongoose')

const ApplicationSchema=new mongoose.Schema({
    // userId:{
    //     type:String,
    //     required:true,
    // },
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required: true    },
    email:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required: true,
    },
    state:{
        type:String,
        required: true,
    },
    company_name:{
        type:String,
        required: true,
    },
    
    team_and_background:{
        type:String,
        required: true,
    },
    company_and_products:{
        type:String,
        required: true,
    },
    problem:{
        type:String,
        required: true,
    },
    solution:{
        type:String,
        required: true,
    },
    value_proposition:{
        type:String,
        required: true,
    },
    competitive_advantage:{
        type:String,
        required: true,
    },
    revenue_model:{
        type:String,
        required: true,
    },
    market_size:{
        type:String,
        required: true,
    },
    market_plan:{
        type:String,
        required: true,
    },
    incubation_type:{
        type:String,
        required: true,
    },
    proposal:{
        type:String,
        required: true,
    },
    status:{
        type:String,
        default:'pending'
    },
    slotId:{
        type:String,
        default: 'none',
    },
    Updated:{
        type:Date,
        default: new Date(),
    }
},{
    timestamps:true
}
)
let ApplicatinForm = mongoose.model("applicationForm", ApplicationSchema);
module.exports = ApplicatinForm;