import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formfield } from './formfield';

describe('Formfield', () => {
  let component: Formfield;
  let fixture: ComponentFixture<Formfield>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formfield]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formfield);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
