import { Component } from '@angular/core';
import { User } from '../shared/classes/user';

@Component({
  selector: 'app-drivenf',
  templateUrl: './drivenf.component.html',
  styleUrl: './drivenf.component.css'
})
export class DrivenfComponent {
user={} as User;
confirm:string="";
}
