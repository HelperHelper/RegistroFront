import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { User } from "src/app/models/user";
import { paises } from "src/app/shared/components/store/almacendedatosdelpais";

@Component({
    selector: 'registro',
    templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit{

    // public title: string;
    public user: User;
    public paises:any = paises;


     constructor(
        private_route: ActivatedRoute,
        private_router: Router
     ){
        // this.title = 'Registro Usuario Talento Humano';

        this.user = new User(1,'','','','','','',0,'','','','','','','','','')
     }

     ngOnInit(){
         console.log('Registro.component Cargado Correctamente');
     }

     onSubmit(){
        console.log(this.user);
         if(this.user.contrasena != this.user.confirmarcontrasena){
            //console.log("las contraseñas no son iguales");
            alert("las contraseñas deben ser iguales, regresa atrás y modificalas hasta que no te salga este mensaje")
         }


     }


}