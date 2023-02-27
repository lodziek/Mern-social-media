import mongoose from "mongoose";

let Schema = mongoose.Schema;

const postSchema = mongoose.Schema(
  {
    userId: {
      type: Schema.Types.String,
      required: true,
    },
    firstName: {
      type: Schema.Types.String,
      required: true,
    },
    lastName: {
      type: Schema.Types.String,
      required: true,
    },
    location: Schema.Types.String,
    description: Schema.Types.String,
    picturePath: Schema.Types.String,
    userPicturePath: Schema.Types.String,
    likes: {
      type: Schema.Types.Map,
      of: Schema.Types.Boolean,
    },
    comments: {
      type: Schema.Types.Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
