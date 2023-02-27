import mongoose from "mongoose";

let Schema = mongoose.Schema;
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: Schema.Types.String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: Schema.Types.String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: Schema.Types.String,
      required: 'Email address is required',
      max: 50,
      unique: true,
      trim: true,
      lowercase: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
      type: Schema.Types.String,
      required: true,
      min: 8,
    },
    picturePath: {
      type: Schema.Types.String,
      default: "",
    },
    friends: {
      type: Schema.Types.Array,
      default: [],
    },
    location: Schema.Types.String,
    occupation: Schema.Types.String,
    viewedProfile: Schema.Types.Number,
    impressions: Schema.Types.Number,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
