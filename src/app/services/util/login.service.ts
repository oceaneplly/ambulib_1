import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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
  ) {
    this.URL_LOGIN = "https://ambulib.tech/API/public/login"
  }

  connect(login: string, pwd: string) {
    login = login.toLowerCase();
    return this.http.post(this.URL_LOGIN, { login, pwd });
  }

  logout() {
    localStorage.clear();
    // emission de l'event de deconnection
    this.sendConnexionEvent(null);
    this.router.navigate(['home']);
  }

  sendConnexionEvent(user: unknown) {
    this.connectionEvents.next(user);
  }

  isLog() {
    let returnRes = false;
    const token = localStorage.getItem('token');
    const userInfo = localStorage.getItem('user');
    if (token) {
      // Si on a un token, on verifie s'il est encore valide (<24heures)
     // @ts-ignore
      const timeToken = parseInt(localStorage.getItem('time'));
      if (isNaN(timeToken)) {
        returnRes = false;
      } else {
        const now = Math.floor(Date.now() / 1000);
        const timeDiff = Math.abs(now - timeToken);
        const diffHours = Math.ceil(timeDiff / (3600));
        if (diffHours < 1706101753) {
          returnRes = true;
        }
      }
    }
    if (!userInfo) {
      returnRes = false;
    }
  //  if (returnRes === false) {
  //    localStorage.clear();
  //  }
    return returnRes;
  }

  getConnectionEvents() {
    return this.connectionEvents.asObservable();
  }





}
