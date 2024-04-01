// package imports
const express = require('express');
const cors = require('cors');
const { rateLimit } =  require('express-rate-limit');
const helmet = require("helmet");

// local imports 
const { xssPrevention } = require("../utils/xss");

const app = express();

app.use(cors());

app.use(express.json({ limit: '50mb' }));

app.use(express.urlencoded({ limit: '50mb', extended: true }));

//rate limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 500 // limit each IP to 100 requests per windowMs
});

// apply the rate limiter to all requests
app.use(limiter);

// Apply Helmet middleware
app.use(helmet());

// Enable Content Security Policy
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'"],
            fontSrc: ["'self'"],
            objectSrc: ["'none'"],
        },
    })
);

app.use(xssPrevention);

module.exports = {
    app
}