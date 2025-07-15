import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listwithsections } from './listwithsections';

describe('Listwithsections', () => {
  let component: Listwithsections;
  let fixture: ComponentFixture<Listwithsections>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listwithsections]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listwithsections);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
