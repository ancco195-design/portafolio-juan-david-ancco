import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Andahuaylas } from './andahuaylas';

describe('Andahuaylas', () => {
  let component: Andahuaylas;
  let fixture: ComponentFixture<Andahuaylas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Andahuaylas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Andahuaylas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
