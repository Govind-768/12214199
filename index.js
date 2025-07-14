const express = require('express');
const app = express();
const routes = require('./routes');
const logger = require('./logging-middleware/logger'); // 

app.use(express.json());
app.use(logger); 
app.use('/api', routes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
