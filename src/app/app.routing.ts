import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Componentes
import { RegistroComponent } from './components/Registro/Registro.component';

const appRoutes: Routes = [
  {path: '', component: RegistroComponent },
  {path: 'registro', component: RegistroComponent},
  {path: '**', component: RegistroComponent}

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =  RouterModule.forRoot(appRoutes);