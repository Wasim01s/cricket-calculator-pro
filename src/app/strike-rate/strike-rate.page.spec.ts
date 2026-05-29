import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StrikeRatePage } from './strike-rate.page';

describe('StrikeRatePage', () => {
  let component: StrikeRatePage;
  let fixture: ComponentFixture<StrikeRatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StrikeRatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
