# VALIDANDO TARJETAS

### I. Pedimos que se ingrese el número de tarjeta a verificar.
		
+ Si no se ingresa un valor, o se ingresan datos no válidos, seguir preguntando.
+ Si el dato es válido, el número es verificado por medio del algoritmo de Luhn.

### II. Algoritmo de Luhn

1. Declaramos las variables a utilizar.
2. Iteramos para invertir el número ingresado mediante ```unshift```
3. Iteramos nuevamente, para ubicar las posiciones de los números a modificar:

+ Si el índice es impar:
	- Multiplicamos el número en el índice dado.
	- Si da un número de 2 dígitos, se suman entre sí, y lo agregamos a la variable ```total```.
	- Si da un número de 1 solo dígito, lo ingresamos a la variable directamente.

+ Si el índice es par:
	- Ingresamos el número a la variable ```total```.

4. Aplicamos  ```parseInt```. para asegurarnos que los números sean  ```numbers``` y no  ```strings```.
	- Guardamos el valor en  ```intTotal```.

5. Sumamos los elementos de  ```intTotal```. Guardamos el valor en  ```verify```.

+ Si este valor dividido por 10 da un residuo igual a 0, entonces la tarjeta es válida, y enviamos un  ```alert```.
 con esta respuesta.
+ Si esta división da un residuo distinto de cero, entonces la tarjeta es inválida, y enviamos un  ```alert```.
 con esta respuesta.

### III. Diagrama de flujo


![](/images/logo.png)
![Alt Text](https://orig00.deviantart.net/b7f0/f/2017/277/2/3/validacion_tarjeta_by_niennaestel-dbpjb5w.jpg)