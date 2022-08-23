const cartArray = [];

function display(){
 
    const tableBody = document.getElementById('cart-players');
    tableBody.textContent = "";
   for(let i = 0; i < cartArray.length; i++){
    // console.log(cartArray[i].Name);
    if(i>4){
        alert('only 5 players is allowed');
        return;
    }
    const name = cartArray[i].Name;

    const tr = document.createElement("tr");
    tr.innerHTML = `
    <th> ${i+1} </th>
    <td> ${name}</td>
    `;
    tableBody.appendChild(tr);

   }
   
  
   
}


function addTocart(element){
    // console.log(element.parentNode.parentNode.children)
    // console.log(element.parentNode.parentNode.children[0].innerText)
   element.disabled = true;
    
    const playerName = element.parentNode.parentNode.children[0].innerText;
    

    
    const playerObj ={
        Name: playerName,
    }
    cartArray.push(playerObj);
//    console.log(cartArray);
//    console.log(cartArray.length);
display(cartArray);

}

