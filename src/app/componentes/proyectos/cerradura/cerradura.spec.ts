import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cerradura } from './cerradura';

describe('Cerradura', () => {
  let component: Cerradura;
  let fixture: ComponentFixture<Cerradura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cerradura]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cerradura);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
