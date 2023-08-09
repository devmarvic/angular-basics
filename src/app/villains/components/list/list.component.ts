import { Component } from '@angular/core';

@Component({
  selector: 'app-villains-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})

// *ngFor es un cicle for para utlizarlo en el html
export class ListComponent {
  public villainsNames: string[] = [
    'Joker',
    "Ra's al Ghul",
    'Enigma',
    'El Pingüino',
    'Dos caras',
    'Espantapájaros',
    'Harley Quinn',
    'Dr. Freeze',
    'El sombrerero loco',
    'Carmine Falcone',
    'Deathstroke',
    'Killer Croc',
    'Clayface',
    'Hugo Strange',
    'Poison Ivy',
    'Máscara Negra',
  ];

  public deletedVillain?: string;

  removeLastVillain():void {
    // .pop() elimina el ultimo elemento del array y lo devuelve
    this.deletedVillain = this.villainsNames.pop();
  }
}
