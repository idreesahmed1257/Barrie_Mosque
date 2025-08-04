// src/Backend/controllers/business.controller.js
import { getBusinessApprovalTemplate } from "../lib/templates.js";
import { createBusinessService, getBusinessesService, updateBusinessesService } from "../services/business.service.js";
import { sendMailServ } from "../services/email.service.js";

export const createBusiness = async (req, res) => {
    try {
        const body = req.body;
        body.state = false;
        const business = await createBusinessService(body);
        if (business) {
            const html = getBusinessApprovalTemplate(business);
            const mailOptions = {
                from: "organizingsecretary@barriemosque.ca",
                to: "organizingsecretary@barriemosque.ca",
                subject: "New Business Approval Request",
                text: "A new business has been submitted for approval.",
                html
            };

            await sendMailServ(mailOptions);
            res.json({ status: 200, message: "Business Created Successfully", data: business });
        }
        else {
            res.status(400).json({ error: "Error In Creating Business" });
        }
    } catch (error) {
        console.log("err", error.message)
        res.status(500).json({ error: error.message })
    }
};

export const getBusinesses = async (req, res) => {
    try {
        const businesses = await getBusinessesService({ state: true });
        if (businesses?.length) {
            res.json({ status: 200, message: "Business Fetched Successfully", data: businesses });
        }
        else {
            res.json({ status: 200, message: "Business Fetched Successfully", data: [] });
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

export const getBusinessesAdmin = async (req, res) => {
    try {
        const businesses = await getBusinessesService({});
        if (businesses?.length) {
            res.json({ status: 200, message: "Business Fetched Successfully", data: businesses });
        }
        else {
            res.json({ status: 200, message: "Business Fetched Successfully", data: [] });
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

export const updateBusinesses = async (req, res) => {
    try {
        const { id } = req.params;
        const { state } = req.body;
        const business = await updateBusinessesService(id, { state: state });
        res.json({ status: 200, message: "Business Updated Successfully", data: business });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};
