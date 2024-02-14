import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/util/login.service';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: any;
  login = "";
  password = "";
  isLogged = false;

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    private toastController: ToastController,
    private router: Router,
  ) {}

  connexion() {
    this.loginService.connect(this.login, this.password).subscribe(
      (result:any) => {
        this.login = '';
        this.password = ''; 
        
        this.user = result.user;
        localStorage.setItem('id', this.user.id);
        localStorage.setItem('prenom', this.user.prenom);
        localStorage.setItem('profil', this.user.profil.id);
        if (this.user.societe != undefined) {
          localStorage.setItem('societe',this.user.societe.id);
        }
        localStorage.setItem('login',this.user.login);
        localStorage.setItem('token', result.token);
        localStorage.setItem('time', result.time_token);
        this.isLogged = true;
        this.toastConnection();
        if (this.user.profil.id == 2) { // redirection vers la page des particuliers
          console.log(localStorage);
          this.router.navigateByUrl('/particulier/reservation');
        } else if (this.user.profil.id == 1) {  // redirection vers la page des ambulanicers
          this.router.navigateByUrl('/ambulance/gestion');
        }
      },
        error => {
        this.user = null;
        this.isLogged = false;
          console.log(localStorage);
          console.log(this.isLogged);
          this.toastNotConnection();
        },
    )
  }


  async toastConnection() {
    const toast = await this.toastController.create({
      message: 'Tu es connecté !',
      duration: 1500,
      position: 'top',
    });
    await toast.present();
  }

  async toastNotConnection() {
    const toast = await this.toastController.create({
      message: 'Tu n\'es pas connecté !',
      duration: 1500,
      position: 'top',
    });
    await toast.present();
  }

  redirectToInscription() {
    this.router.navigateByUrl('/inscription');
  }
}
