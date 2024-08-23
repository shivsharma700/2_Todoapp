const express = require('express');
const { PORT } = require('./config/server.config');
const homePingControler = require('./controllers/home.controller');
const  router  = require('./routes');
const customRoutes = require('./routes/custom');

const app = express();

app.use(router);
app.use('/custom', customRoutes);

app.listen(PORT, () => {
    console.log(`started server at port ${PORT}`);
})