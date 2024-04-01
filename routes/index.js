

const { app } = require('../providers/express');
const { adminRouter } = require('./admin');
app.use('/api/v1/admin', adminRouter);


module.exports = {
    app
}