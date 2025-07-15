import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inputwitherrormessages } from './inputwitherrormessages';

describe('Inputwitherrormessages', () => {
  let component: Inputwitherrormessages;
  let fixture: ComponentFixture<Inputwitherrormessages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inputwitherrormessages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inputwitherrormessages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
