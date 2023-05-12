const totalBalanceField = document.getElementById('total-balance');
let totalBalance = parseInt(totalBalanceField.innerText);


document.getElementById('deposit-btn').addEventListener('click', function(){
    const deposit = document.getElementById('deposit-amount');
    let depositAmount = parseInt(deposit.value);

    const depositTotalELement = document.getElementById('deposit-total');
    let depositTotal = parseInt(depositTotalELement.innerText);

    depositTotal = depositTotal + depositAmount;
    depositTotalELement.innerText = depositTotal;

    totalBalance = totalBalance + depositAmount;
    totalBalanceField.innerText = totalBalance;
    deposit.value = '';
});

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmountField = document.getElementById('withdraw-amount');
    let withdrawAmount = parseInt(withdrawAmountField.value);

    const totalWithdrawField = document.getElementById('total-withdraw');
    let totalwithdraw = parseInt(totalWithdrawField.innerText);

    if(totalBalance >= (200+withdrawAmount)){
        totalwithdraw = totalwithdraw + withdrawAmount;

        totalBalance = totalBalance - withdrawAmount;
    }else{
        alert('Insufficient Balance, at least $200 should be in the acocunt');
    }

    totalWithdrawField.innerText = totalwithdraw;
    totalBalanceField.innerText = totalBalance;
    withdrawAmountField.value ='';
});