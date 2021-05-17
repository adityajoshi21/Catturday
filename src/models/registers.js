const mongoose=require("mongoose");
const catturday= new mongoose.Schema({

    fname : {
        type:String,
        required:true
    },

    lname : {
        type:String,
        required:true
    },

    gender : {
        type:String,
        required:true
    },

    pno : {
        type:String,
        required:true,
        unique:true
        
    },

    email : {

        type:String,
        required:true,
        unique:true
    },

    psw : {
        type: String,
        required:true
    },

    pswrepeat :{
        type: String,
        required:true
    }
    
    })

    //Now we need to create a collection
    const Register = new mongoose.model("Register",catturday);
    module.exports= Register;


