// src/Backend/controllers/business.controller.js
import { createBusinessService, getBusinessesService } from "../services/business.service.js";

export const createBusiness = async (body) => {
    try {
        const business = await createBusinessService(body);
        if (business) {
            return business
        }
        else {
            throw new Error("Error In Creating Business");
        }
    } catch (error) {
        console.log("err", error.message)
        throw new Error(error.message)
    }
};

export const getBusinesses = async () => {
    try {
        const businesses = await getBusinessesService();
        if (businesses?.length) {
            return businesses
        }
        else {
            throw new Error("Error In Creating Business");
        }
    } catch (error) {
        throw new Error(error.message)
    }
};
