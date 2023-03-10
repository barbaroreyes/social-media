const mongoose = require('mongoose');

const UserSchema =  new mongoose.Schema({
    username :{
        type: 'String',
        required: true ,
        min: 3,
        max:20,
        unique:true
    },
    email :{
        type: 'String',
        required: true ,
        max:20,
        unique:true
    },
    password :{
        type: 'String',
        required: true ,
        min: 6,
        unique:true
    },
    profilePicture :{
        type: 'String',
        default:""
    },
    coverPicture :{
        type: 'String',
        default:""
    },
    fallowers :{
        type: Array,
        default:[]
    },
    fallowers :{
        type: Array,
        default:[],
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},
{timestamps:true}
);
module.exports = mongoose.model("User",UserSchema)