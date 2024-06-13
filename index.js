import fetch from 'node-fetch';
const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Cron Process is Running...')
})
const apiUrl = 'https://codespear-1qu9.onrender.com/';

async function callApi() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = response;
        console.log('API Response:', data.status);
    } catch (error) {
        console.error('Error calling API:', error); 
    }
}

// Call the API every 13 minutes (13 * 60 * 1000 milliseconds)
setInterval(callApi, 13 * 60 * 1000);

callApi();
app.listen(port, () => {
  console.log(`Cron app listening on port ${port}`)
})