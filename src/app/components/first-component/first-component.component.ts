import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: string = 'Breno';
  age: number = 22;
  job = "Programador";
  hobbies = ["Correr", "Jogar", "Estudar"];
  car = {
    name: 'Uno',
    year: 2014,
  }
}
