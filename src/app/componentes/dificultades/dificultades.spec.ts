import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dificultades } from './dificultades';

describe('Dificultades', () => {
  let component: Dificultades;
  let fixture: ComponentFixture<Dificultades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dificultades]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dificultades);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
