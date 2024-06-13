import fetch from 'node-fetch';


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
