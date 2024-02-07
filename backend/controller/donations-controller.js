import dotenv from 'dotenv'

import  Payment from "../model/payment.js"
import individualPayment from '../model/individualPayment.js';


dotenv.config();
const client_id = process.env.DB_URI;
const client_secret = process.env.DB_URI_AD;


export const sponsorDonate = async (request, response) => {
    try {
        const payment = await new Payment(request.body);
        payment.save();

        return response.status(200).json('donation saved successfully');
    } catch (error) {
        return response.status(500).json(error);
    }
}

export const individualDonate = async (request, response) => {
    try {
        const individualpayment = await new individualPayment(request.body);
        individualpayment.save();

        return response.status(200).json(' individual donation saved successfully');
    } catch (error) {
        return response.status(500).json(error);
    }
}


