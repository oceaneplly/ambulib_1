import {Component, OnInit, ViewChild} from '@angular/core';
import { ReservationService } from '../../../services/entities/reservation.service'
import {EtablissementService} from "../../../services/entities/etablissement.service";
import {IonModal} from "@ionic/angular";


@Component({
  selector: 'app-histo-ambulance',
  templateUrl: './histo-ambulance.page.html',
  styleUrls: ['./histo-ambulance.page.scss'],
})
export class HistoAmbulancePage implements OnInit {
  reservations : any;
  reservationDetails : any;
  timeReservation: any;

  displayModalDoc: boolean = false;
  modal : boolean = false;
  token : string | null = "";

  constructor(
    private reservationService: ReservationService,
  ) { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.reservations = [];
    this.getReservations();
  }

  ngOnChanges() {
    this.getReservations();
  }

  getReservations() {
    const filters = new Map<string, string[]>();
    if (localStorage.getItem("societe") !== null) {
      // @ts-ignore
      filters.set('societe', localStorage.getItem('societe'));
      filters.set('etat', ["Payée", "Effectuée", "En attente de paiement", "Refusée"]);
      //filters.set('etat',["Test"]);

      this.reservationService.getWithFilters(filters, this.token).subscribe((data: any) => {
        this.reservations = data.results;
      });
    } else {
      this.reservations = undefined;
    }
  }

  showModal(reservation: any): void {
    this.modal = true;
    this.reservationDetails = reservation;
    const date = new Date(this.reservationDetails.date_rdv);
    const date2 = date.toTimeString();
    const split1 = date2.split('T')[0];
    this.timeReservation = split1.split('GM')[0];
    this.reservationDetails.identite = this.reservationDetails.utilisateur.prenom + " " + this.reservationDetails.utilisateur.nom;
  }

  cancel() {
    // @ts-ignore
    this.modal = false;
  }

  handleRefresh(event: { target: { complete: () => void; }; }) {
    this.getReservations();
    event.target.complete();
  }

}
