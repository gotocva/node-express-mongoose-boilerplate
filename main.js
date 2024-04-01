const {app} = require("./routes/index");
const {logger} = require("./utils/logger");
const {connectMongodb} = require("./config/mongoose");
const { auth } = require("./packages/nila-auth/main");

connectMongodb();


const authOptions = {
    name: 'siva', 
    MONGODB_URL: 'mongodb://localhost:27017/boilerplate', 
    JWT_SECRET: '2505199000005' 
}

auth(app, authOptions);

app.listen(3000, () => {
    logger.log('Application running on port ', 3000);
});