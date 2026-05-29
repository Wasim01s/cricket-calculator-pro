import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverRunRatePage } from './over-run-rate.page';

describe('OverRunRatePage', () => {
  let component: OverRunRatePage;
  let fixture: ComponentFixture<OverRunRatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OverRunRatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
