const txtArea = document.querySelector(".texto");
const msj = document.querySelector(".mensaje");


function btnEncriptar() {
    const txtEncriptado = encriptar(txtArea.value);
    msj.value = txtEncriptado;
    txtArea.value = "";
    msj.style.backgroundImage = "none";
}


function encriptar(cadena) {
   
    let llaves = [["e","enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]];

cadena = cadena.toLowerCase();
    for(let i=0; i<llaves.length; i++){
        if(cadena.includes(llaves[i][0])){
            cadena = cadena.replaceAll(llaves[i][0], llaves[i][1]);
        }
    }
    
    return cadena;


}


function btnDesencriptar() {
    const txtEncriptado = desencriptar(txtArea.value);
    msj.value = txtEncriptado;
    txtArea.value = "";
}

function desencriptar(clave) {
   
    let llaves = [["e","enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]];
        
    clave = clave.toLowerCase();
    for(let i=0; i<llaves.length; i++){
        if(clave.includes(llaves[i][1])){
            clave = clave.replaceAll(llaves[i][1], llaves[i][0]);
        }
    }
    
    return clave;


}
