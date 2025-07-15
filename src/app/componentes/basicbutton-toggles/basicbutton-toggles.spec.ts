import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicbuttonToggles } from './basicbutton-toggles';

describe('BasicbuttonToggles', () => {
  let component: BasicbuttonToggles;
  let fixture: ComponentFixture<BasicbuttonToggles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicbuttonToggles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicbuttonToggles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
