
const depositBtn = document.getElementById('deposit-btn');
const buyBtc = document.getElementById('buy-btc');
const buyEth = document.getElementById('buy-eth');
const balanceField = document.getElementById('balance-field');
const btcField = document.getElementById('btc-field');
const ethField = document.getElementById('eth-field');

//get value from input box
function getInputValue(boxId) {
    let inputBox = document.getElementById(boxId);
    let inputAmount = parseFloat(inputBox.value);
    if (isNaN(inputAmount) || inputAmount < 0) {
        inputBox.value = '';
        return alert('Please input valid amount of money in number format')
    }
    inputBox.value = '';
    return inputAmount;
};

//update balance
depositBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let availabelAmount = parseFloat(balanceField.innerText);
    let inputAmount = getInputValue('deposit-box');
    if (inputAmount > 0) {
        balanceField.innerText = inputAmount + availabelAmount;
    }
})
//buy coin
buyBtc.addEventListener('click', function () {
    updatePortfolio('btc-box');
})
buyEth.addEventListener('click', function () {
    updatePortfolio('eth-box');
})

//update portfolio
function updatePortfolio(boxId) {
    let availabelAmount = parseFloat(balanceField.innerText);
    let coinAmount = getInputValue(boxId);

    if (coinAmount > 0) {
        let totalExpense;
        if (boxId == 'btc-box') {
            totalExpense = 10 * coinAmount;
            if (totalExpense > availabelAmount) {
                return alert('Not enough balance')
            }
            btcField.innerText = coinAmount;
        } else if (boxId == 'eth-box') {
            totalExpense = 5 * coinAmount;
            if (totalExpense > availabelAmount) {
                return alert('Not enough balance')
            }
            ethField.innerText = coinAmount;
        }
        balanceField.innerText = availabelAmount - totalExpense;
    }
}


