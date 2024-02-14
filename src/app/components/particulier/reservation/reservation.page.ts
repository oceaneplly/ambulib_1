import {Component, OnInit, ViewChild} from '@angular/core';
import { EtablissementService } from '../../../services/entities/etablissement.service'
import { SocieteService } from '../../../services/entities/societe.service'
import {ToastController} from "@ionic/angular";
import { ReservationService } from 'src/app/services/entities/reservation.service';
import { Router } from '@angular/router';
import {IonModal} from "@ionic/angular";
import { AnimateTimings } from '@angular/animations';
import {Time} from "@angular/common";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {
  etablissements : any;
  etablissementSelected : any;
  etablissement : any;

  societes: any;
  societeSelected : any;
  societe : any;

  nom : any = '';
  adresse : any = '';
  codepostal : any = '';
  ville : any = '';
  pays : any = '';
  telephone : any = '';
  services : any = '';

  modal : boolean = false;

  token : any;
  name: string | undefined;

  heure_rdv : any = '';
  date_rdv : any = '';

  type_sejour: any = '';
  autres: any = '';

  constructor(
    private etablissementService: EtablissementService,
    private societeService: SocieteService,
    private reservationService: ReservationService,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
   this.token = localStorage.getItem('token');
   this.getEtablissements();
   this.getSocietes();
  }

  getEtablissements() {
    const filters = new Map<string, string[]>();
    this.etablissementService.getWithFilters(filters,this.token).subscribe((data: any) => {
      this.etablissements = data.results;
    }, (error) => {
      this.toastErrorRequest();
    });
  }

  getSocietes() {
    const filters = new Map<string, string[]>();
    this.societeService.getWithFilters(filters,this.token).subscribe(
      (data: any) => {
      this.societes = data.results;
    }, (error) => {
      this.toastErrorRequest();
    }
    );
  }

  open() {
    this.modal = true;
  }

  cancel() {
    // @ts-ignore
    this.modal = false;
  }

  postEtablissement() {
    if (this.nom == '' || this.adresse == ''
    || this.codepostal == '' || this.ville == ''
    || this.pays == '' || this.telephone == '') {
      this.toastNotEtablissement();
    } else {
    this.etablissementService.post({
      nom: this.nom,
      adresse: this.adresse,
      codepostal: this.codepostal,
      ville: this.ville,
      pays: this.pays,
      telephone: this.telephone,
      services: this.services
    }, this.token).subscribe(
      (data) => {
      this.etablissements.push(data);
      this.modal = false;
      this.toastEtablissement();
    },
      (error) => {
        this.toastErrorRequest();
      }
    )
    }
  }

  postReservation() {
    if (this.date_rdv == '' || this.heure_rdv == ''
    || this.type_sejour == '' || this.etablissementSelected == ''
    || this.societeSelected == '') {
      this.toastNotEtablissement();
    } else {
      const date_rdv = new Date(this.date_rdv);

    const [heures, minutes] = this.heure_rdv.split(':');

      // Définir l'heure sur la date_rdv
      date_rdv.setHours(Number(heures));
      date_rdv.setMinutes(Number(minutes));


      const padZero = (value: number) => (value < 10 ? `0${value}` : `${value}`);

      const formattedDate =
        date_rdv.getFullYear() +
        '-' +
        padZero(date_rdv.getMonth() + 1) +
        '-' +
        padZero(date_rdv.getDate()) +
        'T' +
        padZero(date_rdv.getHours()) +
        ':' +
        padZero(date_rdv.getMinutes()) +
        ':' +
        padZero(date_rdv.getSeconds()) +
        'Z';

      console.log(formattedDate);
    this.reservationService.post({
      date_rdv: formattedDate,
      bontransport: "none",
      type_sejour: this.type_sejour,
      etat: "En attente",
      autres: this.autres,
      etablissement: { id : this.etablissementSelected },
      societe: { id : this.societeSelected },
      utilisateur: { id : localStorage.getItem('id')}
    }, this.token).subscribe(
      (data) => {
        this.toastReservation();
        console.log(data);
        this.date_rdv = '';
        this.type_sejour = '';
        this.autres = '';
        this.etablissementSelected = '';
        this.societeSelected = '';
        this.heure_rdv = '';
        this.router.navigateByUrl('/particulier/historique');
      }, (error) => {
        this.toastErrorRequest();
      }
    )
    }
  }

  async toastEtablissement() {
    const toast = await this.toastController.create({
      message: 'Nouvel établissement crée',
      duration: 1500,
      position: 'top',
    });
    await toast.present();
  }

  async toastReservation() {
    const toast = await this.toastController.create({
      message: 'Nouvelle réservation créée',
      duration: 1500,
      position: 'top',
    });
    await toast.present();
  }


  async toastErrorRequest() {
    const toast = await this.toastController.create({
      message: 'Erreur dans la requete',
      duration: 1500,
      position: 'top',
    });
    await toast.present();
  }

  async toastNotEtablissement() {
    const toast = await this.toastController.create({
      message: 'Tous les champs n\'ont pas été rempli !',
      duration: 1500,
      position: 'top',
    });
    await toast.present();
  }
}
