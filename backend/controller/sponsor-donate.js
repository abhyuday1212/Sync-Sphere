import paypal from 'paypal-rest-sdk';
import dotenv from 'dotenv'

dotenv.config();
const client_id = process.env.DB_URI;
const client_secret = process.env.DB_URI_AD;


// Configure PayPal

// paypal.configure({
//     mode: 'sandbox',
//     const client_id: process.env.CLIENT_SECRET,
//     const client_secret: process.env.CLIENT_ID,
// });


export const sponsorDonatePage = async (req, res) => {

    const amountDonate = async () => {
        try {

            console.log("Request received:", req.body);

            const amount = req.body.amount;
            req.session.amount = amount;

            const create_payment_json = {
                // ... (unchanged)
                intent: 'sale',
                payer: {
                    payment_method: 'paypal',
                },
                redirect_urls: {
                    return_url: 'http://localhost:8000/success',
                    cancel_url: 'http://localhost:8000/cancel',
                },
                transactions: [
                    {
                        item_list: {
                            items: [
                                {
                                    name: 'Donation',
                                    sku: '001',
                                    price: amount,
                                    currency: 'USD',
                                    quantity: 1,
                                },
                            ],
                        },
                        amount: {
                            currency: 'USD',
                            total: amount,
                        },
                        description: 'Donation to Our Cause',
                    },
                ],
            };

            paypal.payment.create(create_payment_json, (error, payment) => {
                if (error) {
                    console.error("Error creating payment:", error);
                    throw error;
                } else {
                    for (let i = 0; i < payment.links.length; i++) {
                        if (payment.links[i].rel === 'approval_url') {
                            res.redirect(payment.links[i].href);
                        }
                    }
                }
            });
            // Make the API call and wait for the response
            const response = await API.sponsorDonatePage(amount);

            // Check if the API call was successful
            if (response.isSuccess) {
                console.log("Chal gya ji");
                // Perform actions after a successful API call, if needed
            } else {
                console.error("API call unsuccessful:", response);
                // Handle the case where the API call was not successful
            }
        } catch (error) {
            console.error("Error in API call:", error);
            // Handle other errors, if needed
        }
    };

    amountDonate();

}
