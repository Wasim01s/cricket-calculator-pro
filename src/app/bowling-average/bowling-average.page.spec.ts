import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BowlingAveragePage } from './bowling-average.page';

describe('BowlingAveragePage', () => {
  let component: BowlingAveragePage;
  let fixture: ComponentFixture<BowlingAveragePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BowlingAveragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
