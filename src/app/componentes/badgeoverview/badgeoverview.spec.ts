import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Badgeoverview } from './badgeoverview';

describe('Badgeoverview', () => {
  let component: Badgeoverview;
  let fixture: ComponentFixture<Badgeoverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Badgeoverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Badgeoverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
