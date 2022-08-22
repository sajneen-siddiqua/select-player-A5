

document.getElementById('calculate-btn').addEventListener('click',function(){
    const perPlayerInputField = document.getElementById('input-amount');
    const perPlayerInputFieldAmountString = perPlayerInputField.value;
    const perPlayerInputFieldAmount = parseFloat(perPlayerInputFieldAmountString);

    // perPlayerInputField.value = '';




   const perPlayerTotalElement = document.getElementById('player-expenses');
   const perPlayerTotalString = perPlayerTotalElement.innerText;
   const perPlayerTotal = parseFloat(perPlayerTotalString);
   const perPlayerTotalCost = 5 * perPlayerInputFieldAmount;
   perPlayerTotalElement.innerText = perPlayerTotalCost;

 })

 document.getElementById('total-calculate-btn').addEventListener('click', function(){
    const managerInputField = document.getElementById('manager-cost');
    const managerInputFieldCostString = managerInputField.value;
    const managerInputFieldCost = parseFloat(managerInputFieldCostString);

    const coachInputField = document.getElementById('coach-cost');
    const coachInputFieldCostString = coachInputField.value;
    const coachInputFieldCost = parseFloat(coachInputFieldCostString);

    
    const playerExpensesCost = document.getElementById('player-expenses');
    const playerExpensesCostString = playerExpensesCost.innerText;
    const playerExpensesTotal = parseFloat(playerExpensesCostString);
    
  

    const totalExpensesCost = document.getElementById('total-expenses');
    const totalExpensesCostString = totalExpensesCost.innerText;
    const totalExpenses = parseFloat(totalExpensesCostString);
    const totalExpensesAmount = playerExpensesTotal + managerInputFieldCost + coachInputFieldCost;
    totalExpensesCost.innerText = totalExpensesAmount;




 })

