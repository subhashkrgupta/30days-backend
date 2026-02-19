import jwt from 'jsonwebtoken';
import mongoose from "mongoose";
import bcrypt from 'bcrypt'


export const userSchema = new mongoose.Schema(
    {
        userName:{
            type:String,
            required:true,
            unique:true,
            lowercase:true

        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true

        },
        phone:{
            type:String,
            required:true,
            minlength:[10,"mobile number must be 10"],
            minlength:10
        },
        password:{
            type:String,
            required:true,
            minlength:[8,"password must be 8 character"]
        },
        refreshToken:{
            type:String
        }
    }
    ,
    {timestamps:true}
)




userSchema.methods.generateAccessToken = function (){
    return jwt.sign(
        {id:this._id,
        email: this.email,
        userName: this.userName
    },
       process.env.ACCESS_TOKEN,
        {expiresIn:"15m"}
    )
}

userSchema.methods.generateRefreshToken= function (){
    return jwt.sign(
        {id:this._id},
        process.env.REFRESH_TOKEN,
        {expiresIn:"7d"}

    )
}
userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10);
});


userSchema.methods.isPasswordCorrect= async function (password){
    return await bcrypt.compare(password,this.password)
}

export const User = mongoose.model("User",userSchema);