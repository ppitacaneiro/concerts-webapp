import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';
import { Location } from '../../interfaces/location';

@Component({
  selector: 'app-map-event',
  templateUrl: './map-event.component.html',
  styleUrls: ['./map-event.component.scss']
})
export class MapEventComponent implements OnInit, AfterViewInit, OnChanges {
  
  @Input() locationSelected!: Location;
  private map:any;

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.locationSelected = changes.locationSelected.currentValue;
    if (!changes.locationSelected.firstChange) this.moveMap();
  }

  private moveMap() {
    this.map.flyTo(L.latLng(this.locationSelected.latitude, this.locationSelected.longitude),15);
    this.addMarker();
  }

  private addMarker() {
    L.marker([this.locationSelected.latitude, this.locationSelected.longitude]).addTo(
      this.map
    );
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ this.locationSelected.latitude, this.locationSelected.longitude ],
      zoom: 15
    });

    this.addMarker();

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
}
