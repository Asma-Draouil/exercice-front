import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrivenfComponent } from './drivenf/drivenf.component';
import { ExerciceComponent } from './exercice/exercice.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/drivenf'},
  {path:'drivenf', component:DrivenfComponent},
  {path:'inscription', component:ExerciceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
