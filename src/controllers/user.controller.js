import { User } from "../models/user.models.js";

export const registerUser = async (req, res) => {
  try {
    const { userName, phone, email, password } = req.body;

    if (!userName || !phone || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const existingUser = await User.findOne({
      $or: [{ email }, { userName }, { phone }]
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists"
      });
    }

    const newUser = await User.create({
      userName,
      email,
      phone,
      password
    });

    const createdUser = await User.findById(newUser._id)
      .select("-password -refreshToken");

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: createdUser
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed registration",
      error: error.message
    });
  }
};


export const loginUser = async (req,res)=>{
    try {
        const {email,password}=req.body;

        //check validation
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are requireds"
            })
        }

        //check if user already exits

        const existUser= User.findOne({email});
        if(existUser){
            return res.status(400).json({
                success:false,
                message:"User already exists"
            })
        }
        //check password

        const isPassword= await existUser.isPasswordCorrect(password)
        if(!isPassword){
            return res.status(400).json({
                success:false,
                message:"Invalid Password"
            })

        }
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Login Failed"
        })
    }
}