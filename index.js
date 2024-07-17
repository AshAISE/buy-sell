const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

// Fetch live currency rates
const getCurrencyRate = async (currency, type) => {
    // Use an external API service like exchangerate-api.com or any other
    const apiKey = 'YOUR_API_KEY';
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}?apikey=${apiKey}`);
    const data = await response.json();
    return type === 'buy' ? data.rates[currency] * 1.02 : data.rates[currency] * 0.98; // Example markup
};

app.use(express.static('public'));

app.get('/api/rates', async (req, res) => {
    const { amount, currency, type } = req.query;
    const rate = await getCurrencyRate(currency, type);
    res.json({ rate: rate * amount });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
