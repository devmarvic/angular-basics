import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

// Capturar los 2 valores, y al tocar agregar, tengo que tener listo mi objeto para poderlo añadir.

// formsModule y ngModel (html)
// @Output() - Emitir eventos al padre

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss']
})

export class AddCharacterComponent {

  //? instancia de emisor de evento : EventEmitter
  //? emitir , (desprender) un valor con EventEmitter (le estamos forzando la interface), necesita un decorador
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  // inicializar el objecto
  public character: Character = {
    name: '',
    power: 0,
  }

  // una vez tenemos el objeto tenemos que emitirlo para utilizarlo.
  emitCharacter():void {
    // console.log(this.character);
    if(this.character.name.length === 0) return;

    // emitir algo de tipo character
    this.onNewCharacter.emit(this.character);

    // cuando se enviar la informacion, debemos resetear los valores a su posicion por defecto
    this.character = {
      name: '',
      power: 0,
    }
  }


}
