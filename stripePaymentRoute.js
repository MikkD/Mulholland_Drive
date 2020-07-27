// const express = require('express');
// const app = express();
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const path = require('path');

// const PORT = process.env.port || 5000;
// app.use(cors);

// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config();
// };

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, 'client_build')));

//     app.get('*', (res, req) => {
//         res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
//     })
// };



// app.post('/payment', (req, res) => {
//     console.log('RECEIVED THE PAYMENT')
//     const body = {
//         source: req.body.token.id,
//         amount: req.body.anount,
//         currency: 'usd'
//     }

//     stripe.charges.create(body, (stripeErr, stripeRes) => {
//         if (stripeErr) {
//             res.status(500).send({ err: stripeErr })
//         } else {
//             res.status(200).send({ success: stripeRes })
//         }
//     })
// })








// app.listen(PORT, error => {
//     if (error) throw error;
//     console.log(`server is running on port ${PORT}`)
// })


