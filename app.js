function validarFormulario(){
    let nombre=document.getElementById("nombre"). value;
    if(nombre==""){
        alert("El nombre es obligatorio, ingreselo por favor...");
        return false;
    }
    return true;

    let email=document.getElementById("email"). value;
    if(email==""){
        alert("El email es obligatorio, ingreselo por favor...");
        return false;
    }
    return true;
    
    let motivo=document.getElementById("motivo"). value;
    if(motivo==""){
        alert("El motivo es obligatorio, ingreselo por favor...");
        return false;
    }
    return true;
   
    
    let button=document.getElementById("button"). value;
    if(button==""){
        alert("rellene el campo !!!");
        return false;
    }
    return true;

}

function mostrarMensaje(){
    alert("Este es un mensaje de bienvenida !!!");
}