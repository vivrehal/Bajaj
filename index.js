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

app.post('/bfhl',(req,res)=>{
    const {data}=req.body;
    const even=data.filter((num)=>typeof parseInt(num)==='number' && parseInt(num)%2===0);
    const odd=data.filter((num)=>typeof parseInt(num)==='number' && parseInt(num)%2===1);
    const alpha=data.filter((num)=>typeof num==='string' && parseInt(num)===NaN);
    const upper=alpha.map((al)=>al.toUpperCase());
    res.json({
        is_success: true,
        user_id: "vivek_dhiman_01062003",
        email : "vivek1552.be21@chitkara.edu.in",
        roll_number:2110991552,
        odd_numbers: odd,
        even_numbers: even,
        alphabets: upper
    }).status(200);


})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});