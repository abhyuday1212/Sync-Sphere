import dotenv from 'dotenv'

import  Payment from "../model/payment.js"
import individualPayment from '../model/individualPayment.js';


dotenv.config();
const client_id = process.env.DB_URI;
// const client_secret = process.env.DB_URI_AD;


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

export const getTotalDonation= async(request,response)=>{

    const projectID = request.query.projectID;

      try {
        // Quering the "individual donate" collection
        const individualResultCursor = individualPayment.aggregate([
            { $match: { projectID: projectID } },
            { $group: { _id: null, totalBudget: { $sum: '$budget' } } }
        ]);
        
        // Convert the cursor to an array of documents
        const individualResult = await individualResultCursor.exec();
        

        // Querien the "sponsor donate" collection
        const sponsorResult = await Payment.aggregate([
          { $match: { projectID: projectID } },
          { $group: { _id: null, totalBudget: { $sum: '$budget' } } }
        ]).exec();

        // Calculating total budget from both collections
        const totalDonation = await ((individualResult[0]?.totalBudget || 0) + (sponsorResult[0]?.totalBudget || 0));

        response.status(200).json({ totalDonation });
      } catch (error) {
        console.error('Error fetching data:', error);
        response.status(500).json({ error: 'Internal Server Error' });
      }

}
