import mongoose, { mongo } from "mongoose";

const { ObjectId, Number } = mongoose.Schema.Types;

const BlogSchema = new mongoose.Schema({
  user: {
    type: ObjectId,
    ref: "User",
  },
  posts: [
    {
      quantity: {
        type: Number,
        default: 1,
      },
      name: {
        type: String,
        ref: "Posts",
      },
    },
  ],
});

export default mongoose.models.Blog|| mongoose.model("Blog", BlogSchema);
