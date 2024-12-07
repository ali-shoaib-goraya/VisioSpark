import mongoose from "mongoose";
const userSchema = new mongoose.Schema({   // Create a new schema
    email: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    profilePicture: {
        type: String,
        default: '',
    },
    },
    { timestamps: true }  // Add timestamps to the schema
);

const User = mongoose.model('User', userSchema);  // Create a new model

export default User;  // Export the model

