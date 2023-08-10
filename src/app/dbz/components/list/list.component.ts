import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {

  @Input()
  // este valor lo toma por defecto, pero @Input() esta leyendo del padre
  public characterList: Character[] = [
    {
      name: '',
      power: 0
    }
  ]
  // onDelete :
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter (id?: string):void {
    // TODO: Emitir el ID del personaje

    if(!id) return;
    // console.log({id});

    this.onDelete.emit( id );
  }
}
