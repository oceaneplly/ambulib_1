import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from './configuration.service';
import { EncryptionService } from '../../services/util/encryption.service';
import * as Parameters from '../../../assets/configuration/parameters';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL_LOGIN;
  private connectionEvents = new Subject();

  constructor(
    private http: HttpClient,
    private router: Router,
    private encryptionService: EncryptionService,
    private config: ConfigurationService
  ) {
    this.URL_LOGIN = this.config.URL_LOGIN;
  }

  connect(login: string, pwd: string) {
    login = login.toLowerCase(); // pour pouvoir se connecter avec l'IPN en majuscules
    return this.http.post(this.URL_LOGIN, { login, pwd });
  }

  isLog() {
    let returnRes = false;
    const token = localStorage.getItem('token');
    const userInfo = localStorage.getItem('_i');
    if (token) {
      // Si on a un token, on verifie s'il est encore valide (<24heures)
      const timeToken = parseInt(this.encryptionService.decrypt(localStorage.getItem('_t')), 10);
      if (isNaN(timeToken)) {
        returnRes = false;
      } else {
        const now = Math.floor(Date.now() / 1000);
        const timeDiff = Math.abs(now - timeToken);
        const diffHours = Math.ceil(timeDiff / (3600));
        if (diffHours < Parameters.sessionTimeout) {
          returnRes = true;
        }
      }
    }
    if (!userInfo) {
      returnRes = false;
    }
    if (returnRes === false) {
      localStorage.clear();
    }
    return returnRes;
  }

  logout() {
    localStorage.clear();
    // emission de l'event de deconnection
    this.sendConnexionEvent(null);
    this.router.navigate(['login']);
  }

  sendConnexionEvent(user) {
    this.connectionEvents.next(user);
  }

  getConnectionEvents() {
    return this.connectionEvents.asObservable();
  }





}
