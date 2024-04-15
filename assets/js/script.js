console.log("keloke");



let nombreV ="";
let apellidoV ="";
let edadV =0;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let edad = document.getElementById("edad");

let btnEntrar = document.getElementById("btnEntrar");

btnEntrar.addEventListener("click",(e)=> {
   e.preventDefault();

   nombreV = nombre.value;
   apellidoV = apellido.value;
   edadV = edad.value;

   
   if(nombreV === ""){
    alert ("ponte vio aweonao")
    return;
   }
   if(apellidoV === ""){
    return;
   }
   if(edadV === ""){
    return;
   }

    console.log(`nombre: ${nombreV} y el apellido es: ${apellidoV} y la edad es: ${edadV}`);
})