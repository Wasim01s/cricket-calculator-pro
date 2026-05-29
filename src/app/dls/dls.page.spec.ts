import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DlsPage } from './dls.page';

describe('DlsPage', () => {
  let component: DlsPage;
  let fixture: ComponentFixture<DlsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DlsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
