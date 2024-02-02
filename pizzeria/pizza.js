
let numIngredientes = prompt("¿Cuantos ingredientes quiere para su pizza?");

if (isNaN(numIngredientes)) 
{
    alert("Introduzca un número entero por favor, recargue la página");   
}else
{
    let ingredientes = window.prompt("Diga los " + numIngredientes + " ingredientes que desea separado por comas");

    const lista = ingredientes.split(',')
    
    document.write(lista)
}