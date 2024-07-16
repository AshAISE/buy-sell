// scripts.js
document.getElementById('buy-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const amount = parseFloat(document.getElementById('buy-amount').value);
    const currency = document.getElementById('buy-currency').value;
    // Exchange rates can be dynamically fetched from an API
    const rates = { USD: 1.3, EUR: 1.1 };
    const result = amount * rates[currency];
    document.getElementById('buy-result').textContent = `You will receive ${result.toFixed(2)} ${currency}`;
});

document.getElementById('sell-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const amount = parseFloat(document.getElementById('sell-amount').value);
    const currency = document.getElementById('sell-currency').value;
    // Exchange rates can be dynamically fetched from an API
    const rates = { USD: 1.2, EUR: 1.05 };
    const result = amount / rates[currency];
    document.getElementById('sell-result').textContent = `You will receive £${result.toFixed(2)}`;
});
