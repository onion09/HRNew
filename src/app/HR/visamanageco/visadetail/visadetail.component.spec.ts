import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisadetailComponent } from './visadetail.component';

describe('VisadetailComponent', () => {
  let component: VisadetailComponent;
  let fixture: ComponentFixture<VisadetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisadetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisadetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
