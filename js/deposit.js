document.getElementById('btn-deposit').addEventListener('click',function(){
   const depositField = document.getElementById('amount-deposit');
   const newdepositAmountString = depositField.value;
   const newdepositAmount = parseFloat(newdepositAmountString)


  const getDepositTotal = document.getElementById('deposit-total')
  const previousDepositTotalString = getDepositTotal.innerText
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  const currentDepositTotal = previousDepositTotal + newdepositAmount;

  getDepositTotal.innerText = currentDepositTotal;
 
//   clear the deposit field 
depositField.value = '';

// add the amount to balance
const balanceTotal = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

//  calculate calculate current total balance
const currentBalanceTotal = previousBalanceTotal+ newdepositAmount

// set the balace total
balanceTotal.innerText = currentBalanceTotal
})