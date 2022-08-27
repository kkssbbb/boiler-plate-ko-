const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    nmae:{
        type: String,
        maxlength: 15
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password:{
            type: String,
            minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 15
    },
    role:{
        type: Number,
        default: 0
    },
    image: String,
    token:{
        type: String
    },
    tokenExp:{
        type:Number
    }

})

const User =mongoose.model('User',userSchema)

module.exports = { User };