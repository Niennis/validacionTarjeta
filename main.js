function isValidCard(){
	var answer = "";
	do{
		answer = prompt("Indique el número de tarjeta a validar");  // Queremos que siga retornando prompt hasta que ingrese
																	// un dato válido.
		if(answer != ""){
			
			if(isNaN(answer) == false) {				// Si la respuesta es un número, realiza el algoritmo
				luhn(answer);
			} else {
				alert("Ingrese una opción válida");		// Si la respuesta no es un número, pedirá ingresar un dato válido
			}
		}
	}while (answer == "" || isNaN(answer) == true);
}


function luhn(card){							// Algoritmo de Luhn

	var rNumber = [];       					// Declaramos un array donde ingresaremos el número invertido.
	var strPair = '';							// Variable que guarda el valor de doublePair en formato string.
	var total = [];								// Array para agregar los números modificados a sumar.
	var intTotal = [];							// Array para ingresar los elementos convertidos de string a number.
	var verify = '';							// Variable que guarda valor de sumatoria de intTotal.

	for (var i = 0 ; i < card.length ; i++){   	// Revertimos el número: Iteramos para obtener el último número 
		rNumber.unshift(card[i]);				// y agregarlo al inicio del array.
	} 
	
	for (var i = 0; i < card.length; i++){

		if (i%2!=0){							// Si el índice dividido por 2 da un residuo distinto a 0, la posición es 
												// impar. ¿Por qué impar y no par, según algoritmo Luhn? Algoritmo Luhn cuenta
												// desde la posición 1, pero en JS contamos desde la posición 0.

		var doublePair = (rNumber[i])*=2;		// doublePair es el número multiplicado x2, en la ubicación i

			if (doublePair >= 10){										// Si el número multiplicado por 2 es mayor o igual a 10
				strPair = doublePair.toString();						// pasamos el valor a un string, para acceder a los índices
				total.push(parseInt(strPair[0])+parseInt(strPair[1]));	// Sumamos el valor de los índices, y pusheamos
																		// en variable total.
			}else{
				total.push(doublePair);									// Si el valor es menor a 10, el número se
			}															// ingresa directamente a total
			

		}if (i%2==0){								// Si el índice es par
			total.push(rNumber[i]);					// Ingresamos el valor directamente en total.
			}
		}

	for (var j = 0; j < total.length; j++){			// Algunos de los valores se encuentran en str:  
													// aplicamos parseInt para pasarlos a número entero, 
		intTotal.push(parseInt(total[j]));			// y guardamos los valores en intTotal.
	}


	verify = intTotal.reduce(function(a,b){return a + b;});		// Sumamos los elementos del array, dejando un solo valor
																// en la variable verify
	if (verify%10== 0){											// Si verify dividido por 10 tiene resto 0
		alert("Tarjeta válida");								// la tarjeta es válida y retorna un alert.
	}if (verify%10!= 0){										// Si el resto es distinto de 0
		alert("Tarjeta inválida");								// la tarjeta es inválida.
	}
	
}


isValidCard();