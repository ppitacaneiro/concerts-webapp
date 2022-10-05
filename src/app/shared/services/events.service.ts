import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Event } from '../interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private dbPath: string = '/events';

  eventsRef!: AngularFireList<Event>;
  eventRef!: AngularFireObject<Event>;

  constructor(private angularFireDatabase: AngularFireDatabase) { 
    this.eventsRef = angularFireDatabase.list(this.dbPath);
  }

  create(event:Event) {
    return this.eventsRef.push(event);
  }
}
