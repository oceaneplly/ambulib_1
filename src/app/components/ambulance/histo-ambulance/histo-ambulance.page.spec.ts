import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoAmbulancePage } from './histo-ambulance.page';

describe('HistoAmbulancePage', () => {
  let component: HistoAmbulancePage;
  let fixture: ComponentFixture<HistoAmbulancePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HistoAmbulancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
