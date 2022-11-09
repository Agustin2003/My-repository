
let carrito = [];

let btn_compra = document.querySelectorAll(".botonCompra");
console.log( btn_compra);

for( let boton of btn_compra){

    boton.addEventListener("click" , agregar_a_carrito);
}


function agregar_a_carrito(e){

    console.log("EL EVENTO ESTA EN:" , e.target);


    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;


    let nombre_producto = padre.querySelector("h5").textContent;

    let precio = padre.querySelector("span").textContent;
    let img = abuelo.querySelector("img").src;


    let producto = {
        nombre:nombre_producto,
        img:img,
        precio: precio,
        cantidad:1
    };


    carrito.push(producto);

    let arreglo_JSON = JSON.stringify(carrito);
    localStorage.setItem("carrito" , arreglo_JSON);

    console.log( carrito);
    
    mostrar_carrito( producto );
}



function mostrar_carrito( producto){

    let fila = document.createElement("tr");

     fila.innerHTML = `<td><img src="${producto.img}"></td>
                       <td>${producto.nombre}</td>
                       <td>${producto.cantidad}</td>
                       <td>${producto.precio}</td>
                       <td><button class="btn-danger borrar_elemento">Borrar</button></td>`;

    let tabla = document.getElementById("tbody");
    tabla.append(fila);


    let botones_borrar = document.querySelectorAll(".borrar_elemento");

    for( let boton of botones_borrar){

        boton.addEventListener("click" , borrar_producto);
    }

}




function borrar_producto(e){

    let abuelo = e.target.parentNode.parentNode;
    abuelo.remove();
}



let btn_carrito = document.getElementById("mostrar_carrito");

btn_carrito.addEventListener("click" , function(){

    let carrito = document.getElementById("carrito");

    if(carrito.style.display != "none"){
        carrito.style.display = "none";
    }
    else{
        carrito.style.display = "flex";   
     }


})

const btn = document.querySelector ("#comprar")
btn.addEventListener ("click", () => {

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'comunicarse con atención al cliente para realizar la compra',
      })

})




/* Arrays y objetos*/
const ropa = ["Buzos", "Camperas", "Zapatillas", "Pantalones", "Remeras", "TrajesDeBaño"];

console.log (ropa.isuniform)

const producto1 = {
    id: 1,
    prenda: "Remera",
    color: "Negra",
    precio: 50
} 

const producto2 = {
    id: 2,
    prenda: "Pantalon",
    color: "Blanco",
    precio: 100
} 

const producto3 = {
    id: 3,
    prenda: "Pantalon",
    color: "Negro",
    precio: 100
} 

const producto4 = {
    id: 4,
    prenda: "Zapatilla",
    color: "Negra",
    precio: 80
} 

const producto5 = {
    id: 5,
    prenda: "Campera",
    color: "Verde",
    precio: 130
} 

                        
const productos = [ { id: 1, prenda: "Remera", color: "Negra", precio: 50},
                    {id: 2, prenda: "Pantalon", color: "Blanco", precio: 100},
                    {id: 3, prenda: "Pantalon", color: "Negro", precio: 100},
                    {id: 4, prenda: "Zapatilla", color: "Negra", precio: 80},
                    {id: 5, prenda: "Campera", color: "Verde", precio: 130}
]

productos.push ({id: 6, prenda: "Campera", color: "Naranja", precio: 130},
                {id: 7, prenda: "Pantalon", color: "Blanco/Negro", precio: 100}
)

productos.pop ({id: 7, prenda: "Pantalon", color: "Blanco/Negro", precio: 100})
console.log (productos)

for (const producto of productos) {
    console.log (producto.color);
}

localStorage.setItem ("objeto", "productos");
localStorage.setItem ("prendas", ["Remera", "Pantalon", "Zapatilla", "Campera", "Buzo", "Traje de Banno"]);

localStorage.removeItem("objeto");
localStorage.removeItem("objetos");

localStorage.setItem ("producto1", producto1);
const enJSON = JSON.stringify (producto1);
console.log (typeof producto1);
console.log (typeof enJSON);

localStorage.setItem ("producto2", producto2);
const enJSON2 = JSON.stringify (producto2);


localStorage.setItem ("producto3", producto3);
const enJSON3 = JSON.stringify (producto3);


localStorage.setItem ("producto4", producto4);
const enJSON4 = JSON.stringify (producto4);


localStorage.setItem ("producto5", producto5);
const enJSON5 = JSON.stringify (producto5);



    const produc = {
        prenda: "Campera",
        color: "Naranja",
        precio: 130

    }

    const registroIngreso = produc.color == "Naranja" && new Date ()

    console.log (registroIngreso)

    let prenda = producto1.prenda
    let color = producto1.color
    let precio = producto1.precio

    let prenda2 = producto2.prenda
    let color2 = producto2.color
    let precio2 = producto2.precio

    let prenda3 = producto3.prenda
    let color3 = producto3.color
    let precio3 = producto3.precio

    let prenda4 = producto4.prenda
    let color4 = producto4.color
    let precio4 = producto4.precio

    let prenda5 = producto5.prenda
    let color5 = producto5.color
    let precio5 = producto5.precio


    console.log (...ropa);


    let contenedor = document.getElementById("clima");
    let ciudad = "Buenos Aires"
    
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ ciudad +"&lang=es&units=metric&appid=dd4186d39b40532330a1b28b6db94d1a")
        .then( response => response.json())
        .then( data => {
            contenedor.innerHTML = `<span> ${data.name}</span>
                                    <span> Temp: ${data.main.temp}</span>`
        })

        
let agregar_carrito = new Promise( function(resolve,reject){

    setTimeout( function(){

        let tiempo_carga = Math.random();
        if(tiempo_carga < 0.5){
            carrito.push("Producto X");
            resolve(carrito);
        }
        else{
            reject("No se pudo cargar el producto");
        }
    }, 2000);
})


agregar_carrito
        .then( function(carrito){
            console.log("Se cumple");
            console.log(carrito);
        })
        .catch(function(error){
            console.log("No se cumple");
            console.log(error);
        })
        .finally(function(){
            console.log("Promesa terminada");
        });


        var numeros = [3,6,67,6,23,11,100,8,93,0,17,24,7,2,33,45,28,33,23,12,99,100];

        var min = numeros[50];
        var max = numeros[50];
        
        numeros.forEach(numero => {
            if(numero<min){
                (min=numero)
             }

            })
        
        numeros.forEach(numero => {
            if(numero>max){
                (max=numero)
             };
    
        })

        console.log(max)
        console.log(min)
    
    






