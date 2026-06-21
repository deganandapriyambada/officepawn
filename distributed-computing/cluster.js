const express = require('express')
const app = express()
const port = 3000
// Node Cluster
const cluster = require('node:cluster');
const numCPUs = require('node:os').availableParallelism();
const process = require('node:process');


function randomTwelveDigitNumber() {
    const min = 100000000000;
    const max = 999999999999;
    return parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
}

function calculate(timestampInt, randomizedDigit) {
    const min = 1;
    const max = 3;
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    if (rand == 1) {
        return parseInt(timestampInt) + parseInt(randomizedDigit);
    } else if (rand == 2) {
        return parseInt(timestampInt) - parseInt(randomizedDigit);
    } else {
        return parseInt(timestampInt) * parseInt(randomizedDigit);

    }
}

if (cluster.isPrimary) {
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker) => {
        //console.log(`worker on PID: ${worker.process.pid} died`);
    });
} else {
    app.get('/', (req, res) => {
        const currentTimestamp = Date.now();
        //console.log(`requests processed by PID: ${process.pid}`)
        return res.status(200).json({ "number": calculate(currentTimestamp, randomTwelveDigitNumber()) });
    })

    app.listen(port, () => {
        console.log(`Worker on PID: ${process.pid} | API Exposes on port: ${port}`)
    })
}