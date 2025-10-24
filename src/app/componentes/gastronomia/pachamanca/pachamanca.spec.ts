import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pachamanca } from './pachamanca';

describe('Pachamanca', () => {
  let component: Pachamanca;
  let fixture: ComponentFixture<Pachamanca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pachamanca]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pachamanca);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
