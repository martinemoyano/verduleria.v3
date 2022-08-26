document.getElementById('txtNombreUsuario').value
document.getElementById('txtClaveUsuario').value
document.getElementById('txtClaveUsuario2').value
document.getElementById('txtEmailUsuario').value

class Subscriptor
{
     constructor(obj) {
        this.nombre  = obj.nombre;
        this.clave  = obj.clave;
        this.clave  = obj.clave2;
        this.email  = obj.email;
    }
}


let ArrayDeSubscriptores=[];


VerificaryCargar();



let botonRegistrar = document.getElementById("btnRegistrar")
botonRegistrar.onclick = () =>{

    const nombreIngresado = document.getElementById('txtNombreUsuario').value.trim();
    const claveIngresada = document.getElementById('txtClaveUsuario').value.trim();
    const claveIngresada2 = document.getElementById('txtClaveUsuario2').value.trim();
    const emailIngresado = document.getElementById('txtEmailUsuario').value.trim();



    /* validaciones */
    verificarIngresos()

function verificarIngresos(){
    if (nombreIngresado === ""){
        setErrorFor(nombreIngresado, "debe incluir un usuario");


    }else{
        setSuccessFor(nombreIngresado)
    }

    function setErrorFor(input, message){
        const formControl = input.parentElement;
        // const small = formControl.querySelector('small');

        // small.innerText = message;
        formControl.className = 'form-control error'
    }
    function setSuccessFor(input){
        const formControl = input.parentElement;
        formControl.className = 'form-control success'
    }
}

//  borrar

// fin validaciones


    let objGenerico={nombre : nombreIngresado , clave : claveIngresada , email:emailIngresado}
    ArrayDeSubscriptores.push(new Subscriptor(objGenerico));

    Guardar()   
}



function Guardar()
{
    localStorage.setItem("ListadoSubscriptores",JSON.stringify( ArrayDeSubscriptores));
}



function VerificaryCargar()
{
    let arrayAuxiliar=JSON.parse(localStorage.getItem("ListadoSubscriptores"));

    if(arrayAuxiliar)
    {
        for(elemento of arrayAuxiliar )
        {
            ArrayDeSubscriptores.push(new Subscriptor(elemento));
            
        }
        let largo=arrayAuxiliar.length;
        console.log("tiene "+ largo +" elementos");
    }
    else
    {
        console.log("no hay registros");
    }
   

}

// verificacion manda a otra pagina
// if (usuarioRetornado.clave == pass.value) {window.location = "turnero.html";} else {parrafo.innerHTML = "Los datos ingresados son incorrectos"}