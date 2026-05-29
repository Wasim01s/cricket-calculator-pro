import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NetRunRatePage } from './net-run-rate.page';

describe('NetRunRatePage', () => {
  let component: NetRunRatePage;
  let fixture: ComponentFixture<NetRunRatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NetRunRatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
