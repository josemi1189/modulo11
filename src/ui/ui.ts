import { validaCuentaBancaria, formateaCuentaCorriente, compruebaFormato } from "../controller/motor";
import { CuentaBancaria, bancos } from "../models/model";



/**
 * Obtiene valor del input introducido.
 * @returns {string} Valor del input
 */
const getNumCuenta = ():string => {
   const inputCuenta = document.getElementById("inputCuenta");
   let cuenta:string = "";
   if (inputCuenta && inputCuenta instanceof HTMLInputElement) {
      cuenta = inputCuenta.value.replaceAll(" ","");
   }
   return cuenta;
}

/**
 * Modifica valor del input ya formateado
 * @returns {string} Valor del input
 */
const setNumCuenta = (numCuenta:string):void => {
   const inputCuenta = document.getElementById("inputCuenta");

   if (inputCuenta && inputCuenta instanceof HTMLInputElement) {
      inputCuenta.value = numCuenta;
   }
};


const creaContenedorSpan = (contenedorPadre:HTMLDivElement, contenido?:string, clase?:string):void => {
   if (contenido) {
      const nuevoContenedor = document.createElement("span");
      (clase) && nuevoContenedor.classList.add(clase);
      nuevoContenedor.textContent = contenido;
      contenedorPadre.appendChild(nuevoContenedor);
   }
};

const muestraDatos = (formatoOk:boolean, cuentaValidada:CuentaBancaria):void => {
   
   const { isValid, iban, banco, sucursal, digitoControl, numCuenta } = cuentaValidada;
   const divDatosCuenta = document.getElementById("datos-cuenta");
   if (divDatosCuenta && divDatosCuenta instanceof HTMLDivElement) {
      divDatosCuenta.innerHTML = "";
      if (formatoOk) {
         creaContenedorSpan(divDatosCuenta, `El IBAN está bien formado.`);
         
         if (isValid) {
            creaContenedorSpan(divDatosCuenta, `IBAN ${iban} es válido.`);
            
            const bancoObtenido = bancos.filter(bancoLista =>  bancoLista.numero === banco );
            creaContenedorSpan(divDatosCuenta, `${bancoObtenido[0].nombre} (${banco})`, "banco");
            
            creaContenedorSpan(divDatosCuenta, sucursal, "sucursal");
            creaContenedorSpan(divDatosCuenta, digitoControl, "digito-control");
            creaContenedorSpan(divDatosCuenta, numCuenta, "num-cuenta");
            
            
            
         }
      } else {
         creaContenedorSpan(divDatosCuenta, "Formato del IBAN erróneo");
      }
   }   
};

const muestraAviso = (cuentaValidada:CuentaBancaria):void => {
   const divAviso = document.getElementById("aviso");
   if (divAviso && divAviso instanceof HTMLDivElement) {

      if (cuentaValidada.isValid){
         divAviso.classList.remove("warning");
         divAviso.classList.add("success");
         divAviso.innerHTML = "El IBAN es válido";
      } else {
         divAviso.classList.remove("success");
         divAviso.classList.add("warning");
         divAviso.innerHTML = "El IBAN es erróneo";
      }
      
   }
};

const handleNumCuenta = ():void => {
   const cuenta = getNumCuenta();   // Obtiene valor del input
   if (compruebaFormato(cuenta)) {  // Comprueba que tiene formato correcto según Expr. Regular
      let cuentaFormateada = formateaCuentaCorriente(cuenta); // Le da formato con espacios
      setNumCuenta(cuentaFormateada);  // Actualiza valor del input para que aparezca formateado
      let cuentaValidada:CuentaBancaria = validaCuentaBancaria(cuenta);
      muestraAviso(cuentaValidada);
      muestraDatos(true, cuentaValidada);
      
    }else {
      muestraDatos(false, {isValid: false});
    }
};


export const app = ():void => {
   const btnComprobarCuenta = document.getElementById("btnComprobar");
   if (btnComprobarCuenta && btnComprobarCuenta instanceof HTMLButtonElement) {
      btnComprobarCuenta.addEventListener("click", handleNumCuenta )
   }

   
};