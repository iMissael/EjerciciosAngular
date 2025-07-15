import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buttonoverview } from './buttonoverview';

describe('Buttonoverview', () => {
  let component: Buttonoverview;
  let fixture: ComponentFixture<Buttonoverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Buttonoverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Buttonoverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
