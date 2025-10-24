import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chiriuchu } from './chiriuchu';

describe('Chiriuchu', () => {
  let component: Chiriuchu;
  let fixture: ComponentFixture<Chiriuchu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chiriuchu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chiriuchu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
