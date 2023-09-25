import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroReservaComponent } from './filtro-reserva.component';

describe('FiltroReservaComponent', () => {
  let component: FiltroReservaComponent;
  let fixture: ComponentFixture<FiltroReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroReservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
