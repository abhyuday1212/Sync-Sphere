import paypal from 'paypal-rest-sdk';


// Configure PayPal
paypal.configure({
    mode: 'sandbox',
    client_id: 'AaVDqsVejYIohtYFyAfTqj_dJX8WITLh22mYIQngEFgrzn9SQE6UbOGadEaFa4WqaOy0mv8R_-2R6uH9',
    client_secret: 'EI-gW8QWXfCnlAtaFi6By9iCxDonoB9vGqhmwDWDsnaw4OGHI8ukC_3FNR-zmyjGXjaBpo_eRkv1h41Q',
});


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
