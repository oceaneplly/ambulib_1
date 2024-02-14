import {Component, OnInit, ViewChild} from '@angular/core';
import { ReservationService } from '../../../services/entities/reservation.service'
import {EtablissementService} from "../../../services/entities/etablissement.service";
import {IonModal} from "@ionic/angular";


@Component({
  selector: 'app-historique',
  templateUrl: './historique.page.html',
  styleUrls: ['./historique.page.scss'],
})
export class HistoriquePage implements OnInit {
  reservations : any;
  reservationDetails : any;
  timeReservation: any;

  displayModalDoc: boolean = false;
  modal : boolean = false;
  token : any;

  constructor(
    private reservationService: ReservationService,
  ) { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.reservations = [];
    this.getReservations();
  }

  getReservations() {
    const filters = new Map<string, string[]>();

    // @ts-ignore
    filters.set('utilisateur', localStorage.getItem('id'));

    this.reservationService.getWithFilters(filters,this.token).subscribe((data: any) => {
      this.reservations= data.results;
    });
  }
  showModal(reservation: any): void {
    this.modal = true;
    this.reservationDetails = reservation;
    const date = new Date(this.reservationDetails.date_rdv);
    const date2 = date.toTimeString();
    const split1 = date2.split('T')[0];
    this.timeReservation = split1.split('GM')[0];
  }

  cancel() {
    // @ts-ignore
    this.modal = false;
  }

  handleRefresh(event: { target: { complete: () => void; }; }) {
    this.reservations = [];
    this.getReservations();
    event.target.complete();
  }


}
