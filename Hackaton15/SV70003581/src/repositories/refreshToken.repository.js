import {RefreshTokenModel} from "../models/refreshToken.model.js";

export const refreshTokenRepository = {
    async create(data){
        return await RefreshTokenModel.create(data);
    },
    async findByToken(token){
        return await RefreshTokenModel.findOne({token});
    },
    async findByUser(userId){
        return await RefreshTokenModel.find({
            user: userId,
            revoked: false
        });
    }
}