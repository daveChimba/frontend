import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVacationTypeComponent } from './delete-vacation-type.component';

describe('DeleteVacationTypeComponent', () => {
  let component: DeleteVacationTypeComponent;
  let fixture: ComponentFixture<DeleteVacationTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteVacationTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVacationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
