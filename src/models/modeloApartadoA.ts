

export interface CuentaBancaria {
   isValid: boolean, 
   iban?:string,
   banco?:string,
   sucursal?:string,
   digitoControl?:string,
   numCuenta?:string,
}

interface Bancos {
   numero: string,
   nombre: string,
}

export const bancos:Bancos[] = [
   {
      numero: "2080",
      nombre: "Abanca Corporación Bancaria"
   },
   {
      numero: "0061",
      nombre: "Banca March"
   },
   {
      numero: "0188",
      nombre: "Banco Alcalá"
   },
   {
      numero: "0182",
      nombre: "Banco Bilbao Vizcaya Argentaria"
   },
   {
      numero: "0130",
      nombre: "Banco Caixa Geral"
   },
   {
      numero: "0234",
      nombre: "Banco Caminos"
   },
   {
      numero: "2105",
      nombre: "Banco Castilla-La Mancha"
   },
   {
      numero: "0240",
      nombre: "Banco de Crédito Social Cooperativo"
   },
   {
      numero: "0081",
      nombre: "Banco de Sabadell"
   },
   {
      numero: "0487",
      nombre: "Banco Mare Nostrum"
   },
   {
      numero: "0186",
      nombre: "Banco Mediolanum"
   },
   {
      numero: "0238",
      nombre: "Banco Pastor"
   },
   {
      numero: "0075",
      nombre: "Banco Popular Español"
   },
   {
      numero: "0049",
      nombre: "Banco Santander"
   },
   {
      numero: "3873",
      nombre: "Banco Santander Totta"
   },
   {
      numero: "2038",
      nombre: "Bankia"
   },
   {
      numero: "0128",
      nombre: "Bankinter"
   },
   {
      numero: "0138",
      nombre: "Bankoa"
   },
   {
      numero: "0152",
      nombre: "Barclays Bank PLC"
   },
   {
      numero: "3842",
      nombre: "BNP Paribas Paris"
   },
   {
      numero: "3025",
      nombre: "Caixa de Credit del Enginyers"
   },
   {
      numero: "2100",
      nombre: "Caixabank"
   },
   {
      numero: "2045",
      nombre: "Caja de Ahorros y Monte de Piedad de Ontinyent"
   },
   {
      numero: "3035",
      nombre: "Caja Laboral Popular CC"
   },
   {
      numero: "3081",
      nombre: "Caja Rural Castilla-La Mancha3058 Cajamar Caja Rural"
   },
   {
      numero: "2000",
      nombre: "Cecabank"
   },
   {
      numero: "1474",
      nombre: "Citibank Europe PLC"
   },
   {
      numero: "3821",
      nombre: "Commerzbank AG"
   },
   {
      numero: "3877",
      nombre: "Danske Bank A/S"
   },
   {
      numero: "0019",
      nombre: "Deutsche Bank SAE"
   },
   {
      numero: "0239",
      nombre: "EVO Banco"
   },
   {
      numero: "2085",
      nombre: "Ibercaja Banco"
   },
   {
      numero: "1465",
      nombre: "ING Bank NV"
   },
   {
      numero: "2095",
      nombre: "Kutxabank"
   },
   {
      numero: "2048",
      nombre: "Liberbank"
   },
   {
      numero: "0131",
      nombre: "Novo Banco"
   },
   {
      numero: "0073",
      nombre: "Open Bank"
   },
   {
      numero: "0108",
      nombre: "Société Générale"
   },
   {
      numero: "2103",
      nombre: "Unicaja Banco"
   }
]