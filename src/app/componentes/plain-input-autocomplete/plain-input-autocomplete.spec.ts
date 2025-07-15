import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainInputAutocomplete } from './plain-input-autocomplete';

describe('PlainInputAutocomplete', () => {
  let component: PlainInputAutocomplete;
  let fixture: ComponentFixture<PlainInputAutocomplete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlainInputAutocomplete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlainInputAutocomplete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
