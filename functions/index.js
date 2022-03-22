const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51KfsFTCDgXZWOnhzsFN0HOD7odxrsOyc50dCzAChfQUTLp3Lv1duPRqErPc1k2YjHYPf8BqxJp7MHMCtqafo89NE00wjirSuo4');

// - API

// - App config 
const app = express();

// - Middle ware
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello World!"))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Recieved Boom! For this amount >>>>', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });
    // OK - Created 
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
        
    });
})
// - Listen command
exports.api = functions.https.onRequest(app)
// example endpoint
// http://localhost:5001/clone-22885/us-central1/api