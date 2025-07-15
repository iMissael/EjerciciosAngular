import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Treewithdynamicdata } from './treewithdynamicdata';

describe('Treewithdynamicdata', () => {
  let component: Treewithdynamicdata;
  let fixture: ComponentFixture<Treewithdynamicdata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Treewithdynamicdata]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Treewithdynamicdata);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
