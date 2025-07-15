import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SVGicons } from './svgicons';

describe('SVGicons', () => {
  let component: SVGicons;
  let fixture: ComponentFixture<SVGicons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SVGicons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SVGicons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
