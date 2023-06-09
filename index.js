const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const allData = require('./chefData.json');
app.use(cors());
app.get('/', (req, res) => {
    res.send("China chef recipe house is running!!")
})

app.get('/allData', (req, res) => {
    res.send(allData);
})
// get specific data

app.get('/allData/:id', (req, res) => {
    const id =req.params.id;
    console.log(id);
    const selectedData = allData.find(d => d.id == id);
    res.send(selectedData);
})

app.listen(port, () => {
    console.log(`China chef API is running port: ${port}`);
});