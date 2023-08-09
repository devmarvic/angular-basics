import { Component } from '@angular/core';

// Este codigo no es mas que una simple class + un decorador

@Component({
  selector: 'app-villains-villain',
  templateUrl: './villain.component.html',
  styleUrls: ['./villain.component.scss']
})

// las classes tienen el control absoluto
export class VillainComponent {
  public name: string = "Batman";
  public age: number= 42;

  // get es un method, pero se usa como propiedad
  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  // method is a function is class
  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  // method cambiar nombre del heroe
  changeHero():void {
    this.name = "Joker";
  }

  // method cambiar edad del heroe
  changeAge():void {
    this.age = 36;
  }

  resetData():void {
    this.name = 'Batman';
    this.age = 42;
  }
}
