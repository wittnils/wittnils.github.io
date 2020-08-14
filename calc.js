document.querySelector('#berechnen').addEventListener('click', bruch);
 
  function bruch () {
	var nome = parseInt(document.getElementById("nome").value),
	    denom = parseInt(document.getElementById("denom").value),
	    bruch = Math.round(nome/denom);
				
	document.querySelector("output").textContent = bruch;
  }