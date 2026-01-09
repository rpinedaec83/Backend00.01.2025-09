import { UserModel } from "../models/user.model.js";

export const userRepository = {
    async create(userData) {
        return await UserModel.create(userData);
    },
    async findByEmail(email) {
        return await UserModel.findOne({ email: email });
    },
    async findById(id) {
        return await UserModel.findById(id);
    },
    async updatePassword(id, newPasswordHash) {
        return await UserModel.findByIdAndUpdate(
            id,
            { password: newPasswordHash },
            { new: true } // devuelve el documento ya actualizado, no el viejo.
        );
    },
    async deactivateUser(id) {
        return await UserModel.findByIdAndUpdate(
            id,
            { isActive: false },
            { new: true } // devuelve el documento ya actualizado, no el viejo.
        );
    }
}