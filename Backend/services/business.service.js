// backend/services/businessService.js

import businessModel from "../models/business.model.js";


export const createBusinessService = async (data) => {
    try {
        const business = await businessModel.create(data)
        return business;
    } catch (error) {
        console.log("err", error.message)
        throw error
    }
};

export const getBusinessesService = async (obj = {}, projection = undefined) => {
    try {
        const query = businessModel.find(obj).sort({ createdAt: -1 });
        if (projection) query.select(projection);
        const businesses = await query;
        return businesses;
    } catch (error) {
        console.log("error message : ", error)
        throw new Error(error.message);
    }
};

export const updateBusinessesService = async (id, obj = {}) => {
    try {
        const business = await businessModel.findByIdAndUpdate(id, obj, { new: true });
        return business;
    } catch (error) {
        console.log("error message : ", error)
        throw new Error(error.message);
    }
};

