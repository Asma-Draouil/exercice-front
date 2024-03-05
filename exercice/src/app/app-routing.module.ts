import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NotreEquipeComponent } from './notre-equipe/notre-equipe.component';
import { NousContacterComponent } from './nous-contacter/nous-contacter.component';

const routes: Routes = [
  {path:"", pathMatch:"full",redirectTo:"menu"},
  {path:"menu", component:MenuComponent},
  {path:'accueil', component:AccueilComponent},
  {path:'equipe', component:NotreEquipeComponent},
  {path:'contact', component:NousContacterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
