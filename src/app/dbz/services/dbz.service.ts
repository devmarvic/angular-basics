import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuidv4 } from 'uuid';


// decorador : le va a decir a Angular que es un servicio
@Injectable({
  providedIn: 'root'
})
// la idea de estar servicio es tener la Data que yo quiero manejar
export class DbzService {

  public characters: Character[] = [
    {
      id: uuidv4(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuidv4(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuidv4(),
      name: 'Vegeta',
      power: 7500
    },
  ];

  addCharacter( character: Character ):void {

    const newCharacter: Character = {
      ...character,
      id: uuidv4(),
    }

    this.characters.push(newCharacter);
  }

  deleteCharacterById (id: string):void {
    // va a devolver un nuevo array, con la condición definida
    this.characters = this.characters.filter( character => character.id !== id);
  }

}
