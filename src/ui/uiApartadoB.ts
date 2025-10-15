

const muestraImagenes = (urlImagenes:string[]):void => {

   const contenedor = document.getElementById("datos");
   if (contenedor && contenedor instanceof HTMLDivElement) {
      resetImagenes();
      
      if (urlImagenes.length !== 0) {
         for (const url of urlImagenes) {
            const nuevoDiv = document.createElement("div");
            nuevoDiv.classList.add("imagen");
            const nuevaImagen = document.createElement("img");
            nuevaImagen.src = url;
            nuevaImagen.alt = url;
            const textoImagen = document.createElement("label");
            textoImagen.innerHTML = url;
            nuevoDiv.appendChild(nuevaImagen);
            nuevoDiv.appendChild(textoImagen);
            contenedor.appendChild(nuevoDiv);
            
         }
      } else {
         const aviso = document.createElement("span");
         aviso.classList.add("warning");
         aviso.innerHTML = "No se ha encontrado ninguna imagen";
         contenedor.appendChild(aviso);
      }
   }
}

const getUrlImagenes = ():string[] => {
   let exprReg = /\<img[^>]*src="([^"]+)"[^>]*\/\>/g;
   const texto = document.getElementById("campo-texto");
   let urlImagenes:string[] = [];
   if (texto && texto instanceof HTMLTextAreaElement) {
      const contenido = texto.value;
      let iterador = contenido.matchAll(exprReg);
      let coincidencias = [...iterador]; 
      urlImagenes = coincidencias.map(m => m[1]);
   }
   return urlImagenes;
}

const gestionObtenerImagenes = ():void => {
   const imagenes:string[] = getUrlImagenes();
   muestraImagenes(imagenes);
}

const resetImagenes = ():void => {
   const contenedor = document.getElementById("datos");
   if (contenedor && contenedor instanceof HTMLDivElement) {
      contenedor.innerHTML = "";
   }
}

const resetTexto = ():void => {
   const contenedor = document.getElementById("campo-texto");
   if (contenedor && contenedor instanceof HTMLTextAreaElement) {
      contenedor.value = "";
   }
}

export const apartadoB = ():void => {
   const btnGetImagenes = document.getElementById("btn-getImagenes");
   if (btnGetImagenes && btnGetImagenes instanceof HTMLButtonElement) {
      btnGetImagenes.addEventListener("click", gestionObtenerImagenes )   
   }

   const btnCleanText = document.getElementById("btn-clean-text");
   if (btnCleanText && btnCleanText instanceof HTMLButtonElement) {
      btnCleanText.addEventListener("click", () => { resetTexto(); resetImagenes(); });
   }

   
};