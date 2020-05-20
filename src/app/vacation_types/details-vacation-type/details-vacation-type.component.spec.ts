import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsVacationTypeComponent } from './details-vacation-type.component';

describe('DetailsVacationTypeComponent', () => {
  let component: DetailsVacationTypeComponent;
  let fixture: ComponentFixture<DetailsVacationTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsVacationTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsVacationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
