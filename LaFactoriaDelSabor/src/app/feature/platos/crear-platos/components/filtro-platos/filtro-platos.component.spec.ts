import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroPlatosComponent } from './filtro-platos.component';

describe('FiltroPlatosComponent', () => {
  let component: FiltroPlatosComponent;
  let fixture: ComponentFixture<FiltroPlatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroPlatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
