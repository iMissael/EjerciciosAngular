import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Injecting } from './injecting';

describe('Injecting', () => {
  let component: Injecting;
  let fixture: ComponentFixture<Injecting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Injecting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Injecting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
