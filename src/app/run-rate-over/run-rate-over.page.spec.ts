import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RunRateOverPage } from './run-rate-over.page';

describe('RunRateOverPage', () => {
  let component: RunRateOverPage;
  let fixture: ComponentFixture<RunRateOverPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RunRateOverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
