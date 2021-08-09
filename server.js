const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();
// const dbUrl = process.env['DBURL']
const dbUrl = process.env.DBURL;
const userRoutes = require('./routes/userRoutes');
const exerciseRoutes = require('./routes/exerciseRoutes');

app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', userRoutes);
app.use('/', exerciseRoutes);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

mongoose.connect(dbUrl, 
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    } , (err) => {
    console.log('mongo db connection', err)
})


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
