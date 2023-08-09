import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { VillainComponent } from "./components/villain/villain.component";
import { ListComponent } from "./components/list/list.component";

@NgModule({
  declarations: [
    VillainComponent,
    ListComponent,
  ],
  exports: [
    VillainComponent,
    ListComponent,
  ],
  // importar CommonModule para: *ngIf, *ngFor
  imports: [
    CommonModule
  ]
})

export class VillainsModule { }
