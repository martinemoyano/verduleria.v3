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

    let nombreIngresado = document.getElementById('txtNombreUsuario').value;
    let claveIngresada = document.getElementById('txtClaveUsuario').value;
    let emailIngresado = document.getElementById('txtEmailUsuario').value;

    /* validaciones */
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