
let input1 = document.getElementById ("nombre");
let input2 = document.getElementById ("apellido");
let input3 = document.getElementById ("email");
let input4 = document.getElementById ("opiniones");
              
input1.onkeyup = () => { console.log("keyUp") } 
input2.onkeyup = () => { console.log("keyDown") } 
input3.onkeydown = () => { console.log("keyUp") } 
input4.onkeydown = () => { console.log("keyUp") } 



function saludar(){
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    let opiniones = document.getElementById("opiniones");


    console.log("Hola bienvenido/a" , nombre.value, apellido.value);
    console.log("Su email es:" , email.value);
    console.log("Su comentario fue:" , opiniones.value);

  }

let titulo = document.getElementById("h1")
console.log (titulo.innerText)

titulo.innerText = "Contactanos"


    const btn = document.querySelector ("#boton")
    btn.addEventListener ("click", () => {

        const swalWithBootstrapButtons = Swal.mixin ({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Tu estas seguro?',
            text: "No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, elimina esto!',
            cancelButtonText: 'No, cancelar!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Eliminado!',
                'Tu información fue eliminada.',
                'éxito'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelada',
                'Tu información está a salvo :)',
                'error'
              )
            }
          })

    })

    let contenedor = document.getElementById("clima");
    let ciudad = "Buenos Aires"
    
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ ciudad +"&lang=es&units=metric&appid=dd4186d39b40532330a1b28b6db94d1a")
        .then( response => response.json())
        .then( data => {
            contenedor.innerHTML = `<span> ${data.name}</span>
                                    <span> Temp: ${data.main.temp}</span>`
        })
    




























             






             




            
               

        
