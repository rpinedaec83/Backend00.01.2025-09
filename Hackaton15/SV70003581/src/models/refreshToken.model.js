import mongoose, {Schema, Types} from "mongoose";

const RefreshTokenSchema = new Schema(
    {
        user: {type: Types.ObjectId, ref: "User", required: true},
        token: {type: String, required: true, unique: true, index: true}, // index para búsquedas rápidas
        expiresAt: {type: Date, required: true},
        revoked: {type: Date, default: false},
        replacedByToken: {type: String, default: null}, // rotación segura
        createdByIp: {type: String}, // auditoría
        revokedByIp: {type: String} // auditoría
    },
    {
        timestamps: true,
        versionKey: false // control de versiones del documento. Elimina el __v
    }
);

export const RefreshTokenModel = mongoose.model("RefreshToken", RefreshTokenSchema);