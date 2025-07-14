const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
    res.send("Welcome");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
