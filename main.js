//https://v6.exchangerate-api.com/v6/cbe343631fead37da28cb33f/latest/USD

const currencyEl_One = document.getElementById('currency-one');
const currencyEl_Two = document.getElementById('currency-two');
const amountEl_One = document.getElementById('amount-one');
const amountEl_Two = document.getElementById('amount-two');
const swapEl = document.getElementById('swap');
const rateEl  = document.getElementById('rate');

function calculate() {
    const currency_one = currencyEl_One.value;
    const currency_two = currencyEl_Two.value;
    
    fetch(`https://v6.exchangerate-api.com/v6/cbe343631fead37da28cb33f/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
        const conversion_rate = data.conversion_rates[currency_two];
        console.log(conversion_rate);

        rateEl.innerText = `1${currency_one} = ${conversion_rate} ${currency_two}`;

        amountEl_Two.value =amountEl_One.value * conversion_rate;
    })

}

calculate();

currencyEl_One.addEventListener('change', calculate);
currencyEl_Two.addEventListener('change', calculate);
amountEl_One.addEventListener('input', calculate);
amountEl_Two.addEventListener('input', calculate);

swapEl.addEventListener('click', () => {
    swapEl.classList.toggle('active');

    let temp = currencyEl_One.value;

    currencyEl_One.value = currencyEl_Two.value;
    currencyEl_Two.value = temp;

    calculate();
})

alert('hello world');