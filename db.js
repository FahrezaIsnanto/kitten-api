const mongoose = require('mongoose');

const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOST,
    MONGO_PORT,
    MONGO_DB
} = process.env;

const options = {
    useNewUrlParser:true,
    connectTimeoutMS:10000
}

const uri = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(uri,options)
.then(()=>{
    console.log("DB Connected");
})
.catch((err)=>{
    throw err;
})

