
const depositBtn = document.getElementById('deposit-btn');
const buyBtc = document.getElementById('buy-btc');
const buyEth = document.getElementById('buy-eth');
const balanceField = document.getElementById('balance-field');
const btcField = document.getElementById('btc-field');
const ethField = document.getElementById('eth-field');

depositBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let depositBox = document.getElementById('deposit-box');
    let availabelBalance = parseFloat(depositBox.value);
    console.log(depositBox.value)
    balanceField.innerText = depositBox.value;
    // clear input
    depositBox.value = '';

})

