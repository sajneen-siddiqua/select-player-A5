const cartArray = [];

function display(cartPlayer){
//    console.log(cartPlayer); 
    const tableBody = document.getElementById('cart-players');
    tableBody.innerHTML = "";
   for(let i = 0; i < cartPlayer.length; i++){
    // console.log(cartArray[i].Name);
    const name = cartArray[i].Name;

    const tr = document.createElement("tr");
    tr.innerHTML = `
    <th> ${i+1} </th>
    <td> ${name}</td>
    `;
    tableBody.appendChild(tr);
   }
   if(cartArray.length>=6){
    alert('you can not buy more than 5 players')
    return;
   }
}


function addTocart(element){
    // console.log(element.parentNode.parentNode.children)
    // console.log(element.parentNode.parentNode.children[0].innerText)
    
    const playerName = element.parentNode.parentNode.children[0].innerText;
    // 
    
    const playerObj ={
        Name: playerName,
    }
    cartArray.push(playerObj);
//    console.log(cartArray);
//    console.log(cartArray.length);
display(cartArray);
}
