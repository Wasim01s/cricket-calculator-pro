import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BowlingEconomyPage } from './bowling-economy.page';

describe('BowlingEconomyPage', () => {
  let component: BowlingEconomyPage;
  let fixture: ComponentFixture<BowlingEconomyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BowlingEconomyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
