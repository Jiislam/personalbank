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
})