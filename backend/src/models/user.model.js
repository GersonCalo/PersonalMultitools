import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{type: String, required: true, trim: true},
    emial:{type: String, required: true, trim: true, unique: true},
    password:{type: String, required: true},
})

export default mongoose.model('User', userSchema);