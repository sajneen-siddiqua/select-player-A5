// document.getElementById('input-amount').addEventListener('click',function(){

// })

// function perPlayerInputAmount(isIncrease){
//     const perPlayerInputField = document.getElementById('input-amount');
//     const perPlayerInputFieldString = perPlayerInputField.value;
//     const PerPlayerAmount = parseFloat(perPlayerInputFieldString);

//     }

//     function perPlayerTotalAmount(PerPlayerAmount){
//         const totalPlayerCost = PerPlayerAmount * 5;
//         const totalPlayerElement =document.getElementById('cart-players');
//         totalPlayerElement.innerText= totalPlayerCost;
//     }
// document.getElementById('input-amount').addEventListener('click', function(){
//    const totalPlayerCost = perPlayerInputAmount;
//    perPlayerTotalAmount(totalPlayerCost);
   

// })

document.getElementById('calculate-btn').addEventListener('click',function(){
    const perPlayerInputField = document.getElementById('input-amount');
    const perPlayerInputFieldAmountString = perPlayerInputField.value;
    const perPlayerInputFieldAmount = parseFloat(perPlayerInputFieldAmountString);

    perPlayerInputField.value = '';




   const perPlayerTotalElement = document.getElementById('player-expenses');
   const perPlayerTotalString = perPlayerTotalElement.innerText;
   const perPlayerTotal = parseFloat(perPlayerTotalString);
   const perPlayerTotalCost = 5 * perPlayerInputFieldAmount
   perPlayerTotalElement.innerText = perPlayerTotalCost;

 

})