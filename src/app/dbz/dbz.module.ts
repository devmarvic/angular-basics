import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { MainPageComponent } from "./pages/main-page.component";

// components
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';


@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  // siempre se tiene que exportar al mundo exterior
  exports:[
    MainPageComponent
  ],
  // importar CommonModule para: *ngIf, *ngFor ...
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
