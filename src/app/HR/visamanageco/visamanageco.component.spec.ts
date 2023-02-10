import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisamanagecoComponent } from './visamanageco.component';

describe('VisamanageComponent', () => {
  let component: VisamanagecoComponent;
  let fixture: ComponentFixture<VisamanagecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisamanagecoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisamanagecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
