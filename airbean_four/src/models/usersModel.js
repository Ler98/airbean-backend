import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
    minLength: 4,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  role: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("user", userSchema);

export default user;
