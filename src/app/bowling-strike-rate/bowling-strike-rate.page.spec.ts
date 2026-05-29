import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BowlingStrikeRatePage } from './bowling-strike-rate.page';

describe('BowlingStrikeRatePage', () => {
  let component: BowlingStrikeRatePage;
  let fixture: ComponentFixture<BowlingStrikeRatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BowlingStrikeRatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
