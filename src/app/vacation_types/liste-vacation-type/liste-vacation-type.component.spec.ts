import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVacationTypeComponent } from './liste-vacation-type.component';

describe('ListeVacationTypeComponent', () => {
  let component: ListeVacationTypeComponent;
  let fixture: ComponentFixture<ListeVacationTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeVacationTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeVacationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
