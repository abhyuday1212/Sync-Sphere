
import { PayPalError } from "paypal-rest-sdk";
import { payment } from "paypal-rest-sdk";

export const successPage = async (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;
    const amount = req.session.amount;
    const projectId = req.session.projectId;

    const execute_payment_json = {
        payer_id: payerId,
        transactions: [
            {
                amount: {
                    currency: 'USD',
                    total: amount,
                },
            },
        ],
    };

    paypal.payment.execute(paymentId, execute_payment_json, async (error, payment) => {
        if (error) {
            console.error(error.response);
            throw error;
        } else {
            console.log(JSON.stringify(payment));

            const donation = new Donation({
                amount: amount,
                paymentId: paymentId,
                payerId: payerId,
                projectId: projectId,
            });

            try {
                await donation.save();
                console.log('Donation saved to the database.');

                res.send('Donation successful!');
                delete req.session.amount;
            } catch (error) {
                console.error('Error saving donation to the database:', error);
                res.status(500).send('Internal Server Error');
            }
        }
    });
}