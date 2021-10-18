      
function validaData(stringData){
    // alert("fui chamado");
    /******** VALIDA DATA NO FORMATO DD/MM/AAAA *******/    
    var regExpCaracter = /[^\d]/;     //Expressão regular para procurar caracter não-numérico.
    var regExpEspaco = /^\s+|\s+$/g;  //Expressão regular para retirar espaços em branco.

    if(stringData.length != 10){
        //console.log(stringData.length);
        alert("Data com tamanho ivalido");
        return false;
    }

    splitData = stringData.split('-');
        
    if(splitData.length != 3){   
        console.log(splitData);
        alert("parei");
        return false;
    }

    /* Retira os carcteres - do início e fim de cada string. */
    splitData[0] = splitData[0].replace(regExpEspaco, '-');
    splitData[1] = splitData[1].replace(regExpEspaco, '-');
    splitData[2] = splitData[2].replace(regExpEspaco, '-');

    if ((splitData[0].length != 2) || (splitData[1].length != 2) || (splitData[2].length != 4)){      
        alert("Data ivalida");             
        return false;
    }

    /* Procura por caracter não-numérico. EX.: o "x" em "28/09/2x11" */
    if (regExpCaracter.test(splitData[0]) || regExpCaracter.test(splitData[1]) || regExpCaracter.test(splitData[2])){   
        alert("Data ivalida");                 
        return false;
    }

    dia = parseInt(splitData[0],10);
    mes = parseInt(splitData[1],10)-1; //O JavaScript representa o mês de 0 a 11 (0->janeiro, 1->fevereiro... 11->dezembro)
    ano = parseInt(splitData[2],10);    
    var novaData = new Date(ano, mes, dia);                                    
    var hoje = new Date();              

    if (novaData > hoje) {
            alert("data ivalida");
            return false;
        }
        
    if ((novaData.getDate() != dia) || (novaData.getMonth() != mes) || (novaData.getFullYear() != ano)){    
        alert("Data ivalida");                
        return false;
    }
    else{                 
        return true;
    }
}