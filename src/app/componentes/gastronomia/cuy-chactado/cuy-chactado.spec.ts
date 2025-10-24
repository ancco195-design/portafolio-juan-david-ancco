import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuyChactado } from './cuy-chactado';

describe('CuyChactado', () => {
  let component: CuyChactado;
  let fixture: ComponentFixture<CuyChactado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuyChactado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuyChactado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
