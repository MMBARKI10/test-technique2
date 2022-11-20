import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    img: {
      type: String,
    }, 
    role : {
      type : [String],
      default : ["User"],
      enum : ["User","Admin"]
  },
  token: { 
    type: String ,
},
  projects:[{type: ObjectId, ref:"Project"}],
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);