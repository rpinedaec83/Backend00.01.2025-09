import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
    {
        name: {type: String, trim: true, required: true},
        password: {type: String, trim: true, required: true},
        email: {type: String, trim: true, unique: true, lowercase:true, required: true},
        role: {type: String, enum: ["USER", "ADMIN", "MODERATOR"], default: "USER"},
        isActive: {type: Boolean, default: true}
    },
    {
        timestamps: true,
        versionKey: false // control de versiones del documento
    }
);

export const UserModel = mongoose.model("User", UserSchema);