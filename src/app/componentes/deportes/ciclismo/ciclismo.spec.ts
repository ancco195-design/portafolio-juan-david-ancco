import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ciclismo } from './ciclismo';

describe('Ciclismo', () => {
  let component: Ciclismo;
  let fixture: ComponentFixture<Ciclismo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ciclismo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ciclismo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
