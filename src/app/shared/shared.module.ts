import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardEventComponent } from './components/card-event/card-event.component';
import { MapEventComponent } from './components/map-event/map-event.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [NavbarComponent, CardEventComponent, MapEventComponent, SpinnerComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    CardEventComponent,
    MapEventComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
