import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoundaryPercentagePage } from './boundary-percentage.page';

describe('BoundaryPercentagePage', () => {
  let component: BoundaryPercentagePage;
  let fixture: ComponentFixture<BoundaryPercentagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BoundaryPercentagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
