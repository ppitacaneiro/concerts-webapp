import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyeventsRoutingModule } from './myevents-routing.module';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    HomeComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    MyeventsRoutingModule
  ]
})
export class MyeventsModule { }
