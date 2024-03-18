const express = require('express');
const cors = require('cors');


const app = express();
const port = 3000;
app.use(cors({
    origin: '*',
    credentials: true
}));
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});