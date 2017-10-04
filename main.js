function isValidCard(){
	var answer = "";
	do{
		answer = prompt("Indique el número de tarjeta a validar");   //Queremos que siga retornando prompt hasta que ingrese
																		// un dato válido.
		if(answer != ""){
			
			if(isNaN(answer) == false) {			// Si la respuesta es un número, realiza el algoritmo
				luhn(answer);
			} else {
				alert("Ingrese una opción válida");		//Si la respuesta no es un número, pedirá ingresar un dato válido
			}
		}
	}while (answer == "" || isNaN(answer) == true);
}


function reverseNumber(card){
	var rNumber = [];       					//Declaramos un array donde ingresaremos el número invertido.
	for (var i = 0 ; i < card.length ; i++){   	// Iteramos para obtener el último número y agregarlo
		rNumber.unshift(card[i]);				// al inicio del array.
	} return rNumber;
}


function luhn(card){
	var rNumber = reverseNumber(card);       	//Accedemos al número invertido llamando a la función reverseNumber.
	var total = [];
	var intTotal = [];

	for (var i = 0; i < rNumber.length; i++){
		if (i%2!=0){							// Si el índice dividido por dos da un residuo distinto a 0, la posición es 
												// impar. ¿Por qué impar y no par, según algoritmo Luhn? Algoritmo Luhn cuenta
												// desde la posición 1, pero en JS contamos desde la posición 0.

		var doublePair = rNumber[i]*=2;			//doublePair es el número multiplicado x2, en la ubicación i

			if (doublePair >= 10){						//Si el número multiplicado por 2 es mayor o igual a 10
				var strPair = doublePair.toString();	//pasamos el valor a un string, para acceder a los índices
				total.push(parseInt(strPair[0])+parseInt(strPair[1]));	//Sumamos el valor de los índices, y pusheamos
																		// en variable total.
			}else{
				total.push(doublePair);									//Si el valor es menor a 10, el número se
			}															// ingresa directamente a total
			

		}if (i%2==0){							// Si el índice es par
			total.push(rNumber[i]);				// Ingresamos el valor directamente en total.
			}
		}

	for (var j = 0; j < total.length; j++){
		
		intTotal.push(parseInt(total[j]));

		intTotal.reduce(function(a,b){return a + b;});

		if (intTotal%10== 0){
			alert("Tarjeta válida")
		}if (intTotal%10!= 0){
			alert("Tarjeta inválida")
		}
	}

}


/*var total= '';

function computeSumOfAllElements(arr) {
    total = arr.reduce(function(a, b){return a + b; });
    return total;*/


isValidCard();