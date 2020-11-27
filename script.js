
addmenues("myMenue")

function click1(param)   {
   console.log(param)
   let ticketPrice = parseInt(document.getElementById("price").innerHTML)
   console.log(ticketPrice)
   document.getElementById("sum").innerText = "Total: " + param*ticketPrice +" Kr ("+param+")";
}

function buy(){
   alert("Nice! See you at the concert")
}

function addmenues(id)   {
      let html = ``
      for(let i=1; i<11; i++)   {
         html += `<button class="dropdown-item" type="button" onclick="click1(${i})">${i}</button>`
      }
   document.getElementById(id).innerHTML = html
}