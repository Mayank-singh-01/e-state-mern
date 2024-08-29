import mongoose from "mongoose";

const userSchema = mongoose.Schema(
   {
      username: {
         type: String,
         required:true,
      },
      email: {
         type: String,
         required:true,
         unique:true,
      },
      password: {
         type: String,
         required:true,
      },
      avatar: {
         type : String,
         default : "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
      },
   },
   {timestamps: true }
);

const User = mongoose.model('User',userSchema);

export default User;