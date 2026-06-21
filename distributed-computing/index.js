const express = require('express')
const app = express()
const port = 3000

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

app.get('/', (req, res) => {
    const currentTimestamp = Date.now();
    return res.status(200).json({ "number": calculate(currentTimestamp, randomTwelveDigitNumber()) });
})

app.listen(port, () => {
    console.log(`API Exposes on port: ${port}`)
})

