import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrl: './exercice.component.css'
})
export class ExerciceComponent {
nom:string="";
email:string="";
age:number=0;
motDePasse:string="";
confirmation:string="";
}
