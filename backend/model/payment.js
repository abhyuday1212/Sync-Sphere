import mongoose from 'mongoose';

const PaymentSchema = mongoose.Schema({
    title: { type: String, required: true },
    number: {type:Number, requireed: true},
    budget: {type: Number, required: true},
    projectID: { type: String, required: true },
    paymentID: { type: String, required: true },
    payerID: { type: String, required: true },
    createdDate: {type: Date, required: true},

});


const payment = mongoose.model('companydonations', PaymentSchema);

export default payment;