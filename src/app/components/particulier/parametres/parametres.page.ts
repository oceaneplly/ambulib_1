import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToastController} from "@ionic/angular";
import {Router} from "@angular/router";
import {LoginService} from "../../../services/util/login.service";
import {UtilisateurService} from "../../../services/entities/utilisateur.service";

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.page.html',
  styleUrls: ['./parametres.page.scss'],
})
export class ParametresPage implements OnInit {
  alertButtons = ['Oui'];
  modalChangeInfos : boolean = false;
  modalChangePassword : boolean = false;

  oldPassword : string = "";
  newPassword : string | null = "";
  newPassword2 : string | null = "";
  utilisateur : any;
  datenaissance: any;

  login : string = "";
  id: string = "";
  token: string = "";

  constructor(
    private http: HttpClient,
    private toastController: ToastController,
    private router: Router,
    private loginService: LoginService,
    private utilisateurService: UtilisateurService,
  ) { }

  ngOnInit() {
    // @ts-ignore
    this.login = localStorage.getItem("login");
    // @ts-ignore
    this.id = localStorage.getItem("id");
    // @ts-ignore
    this.token = localStorage.getItem("token");
    this.getUtilisateurs();
  }

  getUtilisateurs() {
    const filters = new Map<string, string[]>();
    // @ts-ignore
    filters.set('id', localStorage.getItem('id'));
    this.utilisateurService.getWithFilters(filters, this. token).subscribe(
      (data : any) => {
        if (data.results.length > 0) {
          this.utilisateur = data.results[0];
          this.datenaissance = this.utilisateur.datenaissance.split('T')[0];
        } else {
          this.toastErrorUser();
          this.router.navigateByUrl("/home");
        }
      },
      error =>  {
        this.toastErrorUser();
        this.router.navigateByUrl("/home");
      }
    );
  }

  onAlertDismissedDeconnection(event: any) {
    if (!event.detail.role) {
      localStorage.clear();
      this.toastDeconnection()
      this.router.navigateByUrl('/home');
    }
  }

  async toastDeconnection() {
    const toast = await this.toastController.create({
      message: 'Tu es bien déconnecté de l\'application',
      duration: 1500,
      position: 'top',
    });
    await toast.present();
  }

  openModalSecurity(modal : boolean) {
    if (modal) {
      this.modalChangePassword = true;
    } else {
      this.modalChangeInfos = true;
    }
  }

  cancel(modal : boolean) {
    if (modal) {
      this.modalChangePassword = false;
    } else {
      this.modalChangeInfos = false;
    }
  }

  confirmPassword() {
    if (this.oldPassword != "" && this.newPassword != "" && this.newPassword2 != "") {
      this.loginService.connect(this.login, this.oldPassword).subscribe(
        (result: any) => {
          if (this.newPassword !== this.newPassword2) {
            this.toastPassword3();
          } else {
            this.utilisateurService.putPassword({id : this.id, password: this.newPassword}, this.token).subscribe(
              () => {
                this.modalChangePassword = false;
                this.toastPassword4();
                this.oldPassword = "";
                this.newPassword = "";
                this.newPassword2 = "";
              }
            )
          }
        },
        error => {
          this.oldPassword = "";
          this.newPassword = "";
          this.newPassword2 = "";
          this.toastPassword2()
        }
      );
    } else {
      this.oldPassword = "";
      this.newPassword = "";
      this.newPassword2 = "";
      this.toastPassword1();
    }
  }

  confirmInfos() {
    if (this.utilisateur.genre.length == 0 || this.utilisateur.nom.length == 0 || this.utilisateur.prenom.length == 0 ||
      this.utilisateur.adresse.length == 0 || this.utilisateur.ville.length == 0
      || this.utilisateur.codepostal.length == 0 || this.utilisateur.email.length == 0 ||
      this.utilisateur.login.length == 0 || this.utilisateur.pays.length == 0
      || this.utilisateur.datenaissance.length == 0) {
      this.toastPassword1();
    } else {
      const date_naissance = new Date(this.datenaissance);
      const padZero = (value: number) => (value < 10 ? `0${value}` : `${value}`);
      const formattedDate =
        date_naissance.getFullYear() +
        '-' +
        padZero(date_naissance.getMonth() + 1) +
        '-' +
        padZero(date_naissance.getDate()) +
        'T' +
        padZero(date_naissance.getHours()) +
        ':' +
        padZero(date_naissance.getMinutes()) +
        ':' +
        padZero(date_naissance.getSeconds()) +
        'Z';

      this.utilisateur.datenaissance = formattedDate;
      this.utilisateurService.put(this.utilisateur, this.token).subscribe(
        () => {
          this.modalChangeInfos = false;
          this.toastAcceptUser();
        },
        error => {
          this.toastErrorUser();
        }
      );
    }
  }

  async toastPassword1() {
    const toast = await this.toastController.create({
      message: 'Tous les champs n\'ont pas été rempli',
      duration: 1500,
      position: 'top',
    });
    await toast.present();
  }

  async toastPassword2() {
    const toast = await this.toastController.create({
      message: 'Le mot de passe actuel n\'est pas bon',
      duration: 1500,
      position: 'top',
    });
    await toast.present();
  }

  async toastPassword3() {
    const toast = await this.toastController.create({
      message: 'Le nouveau mot de passe et la confirmation ne sont pas identiques',
      duration: 1500,
      position: 'top',
    });
    await toast.present();
  }

  async toastPassword4() {
    const toast = await this.toastController.create({
      message: 'Le mot de passe a bien été changé',
      duration: 1500,
      position: 'top',
    });
    await toast.present();
  }

  async toastErrorUser() {
    const toast = await this.toastController.create({
      message: 'Une erreur est arrivée lors de la requête...',
      duration: 1500,
      position: 'top',
    });
    await toast.present();
  }

  async toastAcceptUser() {
    const toast = await this.toastController.create({
      message: 'Vos informations ont bien été enregistré !',
      duration: 1500,
      position: 'top',
    });
    await toast.present();
  }

}
