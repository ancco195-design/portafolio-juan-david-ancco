import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mazamorra } from './mazamorra';

describe('Mazamorra', () => {
  let component: Mazamorra;
  let fixture: ComponentFixture<Mazamorra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mazamorra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mazamorra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
