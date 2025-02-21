
const express = require('express');
const bodyParser = require('body-parser');
const bfhlRoutes = require('./routes/bfhlRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express(); 
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/bfhl', bfhlRoutes);
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});









