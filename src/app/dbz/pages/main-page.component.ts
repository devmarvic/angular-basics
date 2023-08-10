// snippet para crear el componente a-component
import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service'

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent {

  // Aqui se hace la inyección de dependecias de Services
  //! servicio privado : este servicio no debe de ser public
  constructor( private dbzService: DbzService ) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string):void {
    this.dbzService.deleteCharacterById(id)
  }

  onNewCharacter( character: Character):void  {
    this.dbzService.addCharacter(character);
  }
}
