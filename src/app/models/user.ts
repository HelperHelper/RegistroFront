export class User{
    constructor(
        public id: number,
        public pais: string,
        public genero: string,
        public primernombre: string,
        public segundonombre: string,
        public fechadenacimiento: string,
        public tipodocumento: string,
        public numerodocumento: number,
        public fotodocumentofrente: string,
        public fotodocumentoreverso: string,
        public correoelectronico: string,
        public contrasena: string,
        public confirmarcontrasena: string,
        public numerotelefono: string,
        public numerocelular: string,
        public direccionresidencia: string,
        public codigopostal: string
    ){}
}