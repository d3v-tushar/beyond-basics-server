const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courseData.json');
const { response } = require('express');

app.get('/', (request, response) => {
    response.send('Beyond Basics Server is Up')
});

app.get('/courseData', (request, response) =>{
    response.send(hotels);
})

app.listen(port, () =>{
    console.log(`Beyond Basics Running On Port, ${port}`)
});

