import { Component } from '@angular/core';
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
    private toastController: ToastController
  ) {}

  connexion() {
    this.loginService.connect(this.login, this.password).subscribe(
      (result:any) => {
        this.user = result.user;
        localStorage.setItem('id', this.user.id);
        localStorage.setItem('token', result.token);
        this.isLogged = true;
        console.log(localStorage);
        console.log(this.isLogged);
        this.toastConnection();
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
      message: 'Tu n\'es pas connecté :( !',
      duration: 1500,
      position: 'top',
    });
    await toast.present();
  }
}
