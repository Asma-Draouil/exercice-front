import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrivenfComponent } from './drivenf/drivenf.component';
import { FormsModule } from '@angular/forms';
import { ExerciceComponent } from './exercice/exercice.component';

@NgModule({
  declarations: [
    AppComponent,
    DrivenfComponent,
    ExerciceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
