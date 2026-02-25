import mongoose from "mongoose";

export const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
   
    content: {
      type: String,
      required: true,
    },
    // thumbnail: {
    //   type: String,
    // },
    authour: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: String,
    },
    tags: [
      {
        type: String,
      },
    ],
    status: {
      type: String,
      enum: ["draft", "Published"],
      default: "draft",
    },
    view: {
      type: Number,
      default: 0,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  },
);


export const Blog = mongoose.model("Blog",blogSchema)
