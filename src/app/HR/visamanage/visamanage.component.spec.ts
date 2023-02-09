import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisamanageComponent } from './visamanage.component';

describe('VisamanageComponent', () => {
  let component: VisamanageComponent;
  let fixture: ComponentFixture<VisamanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisamanageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisamanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
