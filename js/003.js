
function __() {
  for( i = 0; i < 3; i++){ 
  	f.faceis[i].checked = true;
	}

}

function _() {
  for( i = 0; i < 3; i++){ 
  	f.faceis[i].checked = false;
	}

}

window.onload = function(){

	f = document.getElementById("f");
	f.onsubmit = function(){

		//alert("cheguei");

		if (f.nome.value.length == 0 ) {
			alert("O nome não pode estar vazio!!");
			f.nome.focus();
			return false;
		}

		if (f.curso.value == "vazio") {
			f.curso.focus();
			alert("Pelo menos um curso deve estar selecionado");
			return false;
		}

		r = f.faceis[0].checked;
		rr = f.faceis[1].checked;
		rrr = f.faceis[2].checked;

		if (  !r && !rr && !rrr) {
			alert(" Pelo menos um curso deve estar selecionado.");
			return false;
		}
	}
}