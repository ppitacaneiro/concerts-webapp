import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapEventComponent } from './map-event.component';

describe('MapEventComponent', () => {
  let component: MapEventComponent;
  let fixture: ComponentFixture<MapEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
