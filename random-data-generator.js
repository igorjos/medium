
const randomString = () => {
    return Math.random().toString(36).substring(7);
}
const generateRandomData = () => {
    return {
        id: Math.floor(Math.random() * 1000),
        email: `${randomString()}@${randomString()}.xyz`,
        name: `${randomString()}`
    }
}

const data = Array.from({length: 200000}, generateRandomData)

// const fs = require('fs');

// fs.writeFile('data.json', JSON.stringify(data), (e) => {
//     if(e)
//     console.log(e);
//     else
//     console.log('Done')
// });

const express = require('express');
const app = express();

/*
Uncomment this for RAW response
app.get('/', (req, res) => {
    res.status(200).json(data);
})

*/

/* Uncomment this part for GZIP 
const compression = require('compression');
app.use(compression({level: 9}))


app.get('/', (req, res) => {
    res.status(200).json(data);
})

*/

/* Uncoment this for restructured fields and values

~40% less data
const splitKeysFromData = () => {

    let response = {
        fields: Object.keys(data[0]),
        values: data.map((item) => {
            return Object.values(item);
        })
    }

    return response;
}

*/

/* Uncoment this for restructured fields and values and gzip 

~70% less data
const compression = require('compression');
app.use(compression({level: 9}))
const splitKeysFromData = () => {

    let response = {
        fields: Object.keys(data[0]),
        values: data.map((item) => {
            return Object.values(item);
        })
    }

    return response;
}

app.get('/', (req, res) => {
    res.status(200).json(splitKeysFromData());
})*/


app.listen(8080, "0.0.0.0", () => {
    console.log('Listens');
})