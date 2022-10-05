import { Location } from './../../../shared/interfaces/location';
import { GeopositionService } from './../../../shared/services/geoposition.service';
import { EventsService } from './../../../shared/services/events.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event } from '../../../shared/interfaces/event'; 

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  // TODO :
  // Handling errors
  // Unsuscribe on destroy

  locations:Location[] = [];
  hasLocations:boolean = false;
  isAddressSelected:boolean = false;
  locationSelected!:Location;
  editEventForm!:FormGroup;
  event:Event = {
    title: '',
    date: new Date(),
    time: {
      hours: 0,
      minutes: 0
    },
    price: 0,
    location: {
      latitude: 0,
      longitude: 0,
      type: '',
      name: '',
      number: '',
      postal_code: '',
      street: '',
      confidence: 0,
      region: '',
      region_code: '',
      county: '',
      locality: '',
      administrative_area: null,
      neighbourhood: '',
      country: '',
      country_code: '',
      continent: '',
      label: '',
    },
    description: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    private eventsService: EventsService,
    private geopositionService: GeopositionService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  
  initForm() {
    this.editEventForm = this.formBuilder.group({
      title : ['', Validators.required],
      date : ['', Validators.required],
      time : ['', Validators.required],
      price : ['', Validators.required],
      location : ['', Validators.required],
      address : ['', Validators.required],
      description : ['']
    });
  }

  get editEventFormControls() {
    return this.editEventForm.controls;
  }

  getCoordsByAddres() {
    const address = this.editEventForm.get('location')?.value;
    this.geopositionService.getCoorsByAddress(address).subscribe(
      (response:any) => {
        this.hasLocations = true;
        this.locations = response['data'];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  showLocationInMap(event:any) {
    this.locationSelected = this.getLocation(event.target.value) as Location;
    this.isAddressSelected = true;
  }

  getLocation(label:string) {
    return this.locations.find(location => location.label === label);
  }
 
  onSubmit() {
    if (this.editEventForm.invalid) return;
    
    const label = this.editEventForm.get('address')?.value;
    this.event.title = this.editEventForm.get('title')?.value;
    this.event.date = this.editEventForm.get('date')?.value;
    this.event.time = this.editEventForm.get('time')?.value;
    this.event.price = this.editEventForm.get('price')?.value;
    this.event.description = this.editEventForm.get('description')?.value;
    this.event.location = this.getLocation(label) as Location;

    this.eventsService.create(this.event)
      .then(_result => {
        console.log(_result);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
