import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BattingAveragePage } from './batting-average.page';

describe('BattingAveragePage', () => {
  let component: BattingAveragePage;
  let fixture: ComponentFixture<BattingAveragePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BattingAveragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
