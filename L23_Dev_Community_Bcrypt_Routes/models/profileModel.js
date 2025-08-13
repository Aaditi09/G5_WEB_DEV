const mongoose = require("mongoose");

const { Schema }=  mongoose;

const ProfileSchema = new Schema({
    
    skills: {type:[String], required: true},
    githubProfile: {type:String, required: true},
    linkedinProfile: {type:String, required: true},
    codingPlatform: {type:String, required: true},
    Location: {type:String, required: true},
    achievements:{type: String, frequires: true}

    
},{
    timestamps: true
})

module.exports = mongoose.model("Profile",UserSchema);