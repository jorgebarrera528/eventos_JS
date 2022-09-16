//Se crea una clase para simular llenado de productos en sistema 
class Producto {
    constructor(codigo, descripcion){
        this.codigo = codigo; 
        this.descripcion = descripcion;
    }
}


let producto1 = new Producto(1, "Cargador de Celular");
let producto2 = new Producto(2, "Audifono");
let producto3 = new Producto(3, "Smartwatch");
let producto4 = new Producto(4, "Mouse");
let producto5 = new Producto(5, "Teclado");


let boton = document.getElementById("btn-main");

let boton1 = document.getElementById("btn1"); 
boton1.addEventListener("click", () => {
    boton.innerHTML = producto1.descripcion;
    carrito.push(boton);
});
let boton2 = document.getElementById("btn2");
boton2.addEventListener("click", () => {
    boton.innerHTML = producto2.descripcion;
    carrito.push(boton);
}); 
let boton3 = document.getElementById("btn3");
boton3.addEventListener("click", () => {
    boton.innerHTML = producto3.descripcion;
    carrito.push(boton);
}); 
let boton4 = document.getElementById("btn4");
boton4.addEventListener("click", () => {
    boton.innerHTML = producto4.descripcion;
    carrito.push(boton);
}); 
let boton5 = document.getElementById("btn5");
boton5.addEventListener("click", () => {
    boton.innerHTML = producto5.descripcion;
    carrito.push(boton);
}); 


const carrito = [];



boton.addEventListener("click", () => {
    alert("Usted compró " + carrito.length + " productos... a continuación los detallamos");  
         
})






