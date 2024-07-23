// backend/services/businessService.js

import businessModel from "../models/business.model";


export const createBusinessService = async (data) => {
    try {
        const business = await businessModel.create(data)
        return business;
    } catch (error) {
        console.log("err", error.message)
        return false
    }
};

export const getBusinessesService = async () => {
    try {
        const businesses = await businessModel.find({});
        return businesses;
    } catch (error) {
        throw new Error(error.message);
    }
};
