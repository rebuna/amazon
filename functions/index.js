const functions = require("firebase-functions");

const express = require('express')
const cors = require('cors')
const stripe = require("stripe")(
  "sk_test_51LaA6JGpCfiM1kwfw5LwA5kV4BnAENXGu7TcYKK9jyAmEIAijJlkIqWxzEwmwmSSavyXYv2cXK9ND8yNp1qSIoYG00YJssSwUU"
);

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
	const total = request.query.total;

	console.log("Payment Request Recieved for this amount >>> ", total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, // subunits of the currency
		currency: "usd",
	});

	// OK - Created
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

// - Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/e-web-60cc5/us-central1/api