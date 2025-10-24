import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aplicacion } from './aplicacion';

describe('Aplicacion', () => {
  let component: Aplicacion;
  let fixture: ComponentFixture<Aplicacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aplicacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aplicacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
