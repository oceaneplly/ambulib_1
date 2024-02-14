import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/util/login.service';



@Component({
  selector: 'app-particulier',
  templateUrl: './particulier.page.html',
  styleUrls: ['./particulier.page.scss'],
})
export class ParticulierPage implements OnInit {

  isLogged : boolean | undefined;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.isLogged = this.loginService.isLog();
  }


}
