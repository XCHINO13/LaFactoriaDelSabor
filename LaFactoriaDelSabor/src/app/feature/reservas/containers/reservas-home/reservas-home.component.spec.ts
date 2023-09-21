import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasHomeComponent } from './reservas-home.component';

describe('ReservasHomeComponent', () => {
  let component: ReservasHomeComponent;
  let fixture: ComponentFixture<ReservasHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservasHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
