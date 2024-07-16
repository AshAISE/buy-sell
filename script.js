async function getRates(type) {
    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;
    const response = await fetch(`/api/rates?amount=${amount}&currency=${currency}&type=${type}`);
    const data = await response.json();
    document.getElementById('result').innerText = `${type.charAt(0).toUpperCase() + type.slice(1)} Rate: ${data.rate}`;
}
