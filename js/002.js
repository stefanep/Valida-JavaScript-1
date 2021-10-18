function Dia(){
    f = document.getElementById("f");

    f.dia.onkeyup = function () {
        if (f.dia.value.length ==2) {
            f.mes.focus();
        }
    }
}

function Mes(){
     f = document.getElementById("f");

    f.mes.onkeyup = function () {
        if (f.mes.value.length ==2) {
            f.ano.focus();
        }
    }
}

window.onload = function (){
    f = document.getElementById("f");
    f.onsubmit = function(){
        if (f.nome.value.length == 0) {
            alert("O nome não pode estar vazio");
            return false;
        }

        if (f.email.value.length > 0) {
            t = f.email.value.length;
            y=0;
            for (i = 0; i < t; i++) {
                if ("@" == f.email.value[i]) {
                    y+=1;
                }
            }

            if (y > 1) {
                alert("O e-mail deve conter exatamente 1 caractere @");
                y=0;
                return false;
            }
        }

        if (f.dia.value.length ==  0 || f.mes.value.length == 0 || f.ano.value.length == 0) {
            alert("Os campos dia, mês e ano devem estar preenchidos");
            return false;
        }

        if (f.dia.value.length <  2 ) {
            alert("O campo dia deve ter 2 dígitos");
            return false;
        }

        if (f.mes.value.length <  2 ) {
            alert("O campo mês deve ter 2 dígitos");
            return false;
        }
        if (f.ano.value.length <  4 ) {
            alert("O campo ano deve ter 4 dígitos");
            return false;
        }

        t=false;
        if (t!=isNaN(f.dia.value) || t!=isNaN(f.mes.value) || t!=isNaN(f.ano.value)) {
            alert(" Os campos dia, mês e ano devem ser numéricos");
            return false;
        }

        if (validaData(f.dia.value+'-'+f.mes.value+'-'+f.ano.value) == false) {
            //alert("chameiii");
            return false;
        }
    }        
}