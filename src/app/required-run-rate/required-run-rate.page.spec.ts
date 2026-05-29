import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RequiredRunRatePage } from './required-run-rate.page';

describe('RequiredRunRatePage', () => {
  let component: RequiredRunRatePage;
  let fixture: ComponentFixture<RequiredRunRatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiredRunRatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
