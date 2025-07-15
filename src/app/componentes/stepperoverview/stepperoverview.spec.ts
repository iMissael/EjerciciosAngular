import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stepperoverview } from './stepperoverview';

describe('Stepperoverview', () => {
  let component: Stepperoverview;
  let fixture: ComponentFixture<Stepperoverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stepperoverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stepperoverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
