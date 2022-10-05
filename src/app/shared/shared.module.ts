import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardEventComponent } from './components/card-event/card-event.component';

@NgModule({
  declarations: [NavbarComponent, CardEventComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    CardEventComponent
  ]
})
export class SharedModule { }
