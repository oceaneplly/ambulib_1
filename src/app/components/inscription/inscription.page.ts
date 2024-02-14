import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from 'src/app/services/entities/utilisateur.service';
import { ProfilService } from 'src/app/services/entities/profil.service';
import { SocieteService } from 'src/app/services/entities/societe.service';
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
    genre = '';
    nom = '';
    prenom = '';
    email = '';
    login = '';
    password = '';
    datenaissance = '';
    adresse = '';
    codepostal = '';
    ville = '';
    pays = '';
    antecedents = '';

    profils : any;
    profilSelected : any;
    societes : any;
    societeSelected : any;

  constructor(
    private router: Router,
    private utilisateurService: UtilisateurService,
    private profilService: ProfilService,
    private societeService: SocieteService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.getProfils();
  }

  getProfils() {
    const filters = new Map<string, string[]>();
    this.profilService.getWithFilters(filters).subscribe((data: any) => {
      this.profils = data.results;
    });
  }

  goToHome() {
  this.router.navigateByUrl("/home")
  }

  postUtilisateur() {
    if (this.genre == '' || this.nom == '' || this.prenom == '' 
    || this. email == '' || this.login == ''
    || this.password == '' || this.datenaissance == '' || this.adresse == ''
    || this.codepostal == '' || this.ville == '' || this.pays == ''
    || this.profilSelected == undefined || this.profilSelected == '') {
      this.toastNotCreation();
    } else {
    const dateNaissance = new Date(this.datenaissance);
  
    // Fonction de formatage personnalisé pour supprimer les millisecondes
    const formatDate = (date: Date) => {
      const formattedDate = date.toISOString().replace(/\.\d{3}Z$/, 'Z');
      return formattedDate;
    };
  
    const dateNaissanceFormattee = formatDate(dateNaissance);

    this.utilisateurService.post({
      genre : this.genre,
      nom : this.nom,
      prenom : this.prenom,
      email : this.email,
      login : this.login,
      password : this.password,
      datenaissance : dateNaissanceFormattee,  
      adresse : this.adresse,
      codepostal : this.codepostal,
      ville : this.ville,
      pays : this.pays,
      antecedents : this.antecedents,
      profil : { id : this.profilSelected},
    }).subscribe(
      () => {
        this.router.navigateByUrl("/home");
        this.genre = '';
        this.nom = '';
        this.prenom = '';
        this.email = '';
        this.login = '';
        this.password = '';
        this.datenaissance = '';
        this.adresse = '';
        this.codepostal = '';
        this.ville = '';
        this.pays = '';
        this.antecedents = '';
        this.profilSelected = '';
        this.toastCreation();
      }
    );
    }
  }

  async toastCreation() {
    const toast = await this.toastController.create({
      message: 'Ton compte a bien été créé !',
      duration: 1500,
      position: 'top',
    });
    await toast.present();
  }

  async toastNotCreation() {
    const toast = await this.toastController.create({
      message: 'Tous les champs n\'ont pas été rempli !',
      duration: 1500,
      position: 'top',
    });
    await toast.present();
  }
}
