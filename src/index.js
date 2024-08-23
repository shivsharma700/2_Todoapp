const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.get('/home', (req, res) => {

    console.log('home called');

    return res.json({msg : 'Ok'});
})

app.listen(PORT, () => {
    console.log(`started server at port ${PORT}`);
})