import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetOverview } from './bottom-sheet-overview';

describe('BottomSheetOverview', () => {
  let component: BottomSheetOverview;
  let fixture: ComponentFixture<BottomSheetOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomSheetOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomSheetOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
