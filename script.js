function click1(param)   {
   console.log(param)
   let ticketPrice = parseInt(document.getElementById("price").innerHTML)
   console.log(ticketPrice)
   document.getElementById("sum").innerText = "Total: " + param*ticketPrice +" Kr ("+param+")";
}

function setsum(param)   {
    console.log(param)
 }
