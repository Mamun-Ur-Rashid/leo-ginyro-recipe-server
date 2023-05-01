const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const allData = require('./chefData.json');
app.get('/', (req, res) => {
    res.send("China chef recipe house is running!!")
})


app.listen(port, () => {
    console.log(`China chef API is running port: ${port}`);
});