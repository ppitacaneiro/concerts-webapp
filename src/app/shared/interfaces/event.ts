import { Location } from './location';
import { Time } from "@angular/common";

export interface Event {
    key?:string;
    title:string;
    date:Date;
    time:Time;
    price:number;
    description:string;
    location: Location;
}