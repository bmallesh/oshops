import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipppingFormComponent } from './shippping-form.component';

describe('ShipppingFormComponent', () => {
  let component: ShipppingFormComponent;
  let fixture: ComponentFixture<ShipppingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipppingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipppingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
