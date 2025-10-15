import * as ibantools from 'ibantools'
import { CuentaBancaria } from '../models/modeloApartadoA';


export const validaCuentaBancaria = (cuenta:string):CuentaBancaria => {

   let resultado:CuentaBancaria;
   const numCuenta = ibantools.electronicFormatIBAN(cuenta); // Quita guiones y espacios respetando formato correcto
   
   if (numCuenta && ibantools.isValidIBAN(numCuenta)) {  
      
      const datosCuenta = ibantools.extractIBAN(numCuenta);
      const iban = numCuenta.slice(0, 4);
      const banco = datosCuenta.bankIdentifier;
      const sucursal = datosCuenta.branchIdentifier;
      const digitoControl = numCuenta.slice(12,14)
      const cuentaCliente = datosCuenta.accountNumber;

      resultado = { 
         isValid: true,
         iban: iban,
         banco: banco,
         sucursal: sucursal,
         digitoControl: digitoControl,
         numCuenta: cuentaCliente
      }

   } else {
      resultado = { isValid: false };
   } 
   return resultado;
   
};

export const formateaCuentaCorriente = (numCuenta:string):string => {

   const separador = " ";
   let cuentaFormateada:string = "";
   numCuenta = numCuenta.replace(" ","");
   cuentaFormateada = numCuenta.slice(0, 4);
   cuentaFormateada += separador;
   cuentaFormateada += numCuenta.slice(4, 8);
   cuentaFormateada += separador;
   cuentaFormateada += numCuenta.slice(8,12);
   cuentaFormateada += separador;
   cuentaFormateada += numCuenta.slice(12,14);
   cuentaFormateada += separador;
   cuentaFormateada += numCuenta.slice(14);
        

   return cuentaFormateada;

};

export const compruebaFormato = (cuenta:string):boolean => {
   
  
   const pattern = /^[A-Z]{2}\d{1,22}$/;
   let rdo = pattern.test(cuenta);
   console.log(rdo);
   return rdo;
};