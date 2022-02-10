const express = require('express');
const app = express();
const routers = require('./routers');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(routers)

app.listen(port,()=>{
    console.log(`This app is listen on port ${port}`);
});