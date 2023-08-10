import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/components/counter.module';
import { VillainsModule } from './villains/villains.module';
import { DbzModule } from './dbz/dbz.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    VillainsModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
