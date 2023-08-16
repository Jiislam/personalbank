1. 
// add withdraw button handler
document.getElementById('btn-withdraw').addEventListener('click',function(){
    //  get the withdraw amount from the input field and convert the input into a number by using parse float
    const withdrawField = document.getElementById('amount-withdraw');
    const newWithDrawAmountString = withdrawField.value
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);

    // get previous previous withdraw total
    const withdrawTotalAmount = document.getElementById('withdraw-total');
    const previousWithdrawTotalString =withdrawTotalAmount.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);  
    
    
    const currentWithdrawTotal=  previousWithdrawTotal + newWithDrawAmount;
    withdrawTotalAmount.innerText = currentWithdrawTotal;

    withdrawField.value = ''

    const balancetotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balancetotalElement.innerText
    const previousBalanceTotal= parseFloat(previousBalanceTotalString)
    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    balancetotalElement.innerText = newBalanceTotal;

    if (newWithDrawAmount > previousBalanceTotal){
        alert('Cant withdraw more than current Balance')
    
    return;}
})