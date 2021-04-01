import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';



const routes: Routes = [
{
  path:'login',
  component: LoginComponent
},

{
 path:'usuario',
 loadChildren: () => import('./modules/usuarios/usuarios.module').then((m) => m.UsuariosModule)
 
},
{
  path:'**',
  redirectTo:'login'
}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
