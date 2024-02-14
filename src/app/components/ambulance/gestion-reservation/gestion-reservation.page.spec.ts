import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionReservationPage } from './gestion-reservation.page';

describe('GestionReservationPage', () => {
  let component: GestionReservationPage;
  let fixture: ComponentFixture<GestionReservationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GestionReservationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
