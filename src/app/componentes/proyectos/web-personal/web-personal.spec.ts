import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPersonal } from './web-personal';

describe('WebPersonal', () => {
  let component: WebPersonal;
  let fixture: ComponentFixture<WebPersonal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebPersonal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebPersonal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
