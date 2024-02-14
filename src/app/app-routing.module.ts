import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {ParametresPage} from "./components/particulier/parametres/parametres.page";
import {ParticulierPage} from "./components/particulier/particulier.page";
import {AmbulancePage} from "./components/ambulance/ambulance.page";


const routes: Routes = [
  {
    path: 'particulier',
    component: ParticulierPage,
    children: [
      {
        path: 'reservation',
        loadChildren: () => import('./components/particulier/reservation/reservation.module').then(m => m.ReservationPageModule)
      },
      {
        path: 'carte',
        loadChildren: () => import('./components/particulier/carte/carte.module').then(m => m.CartePageModule)
      },
      {
        path: 'historique',
        loadChildren: () => import('./components/particulier/historique/historique.module').then(m => m.HistoriquePageModule)
      },
      {
        path: 'parametres',
        loadChildren: () => import('./components/particulier/parametres/parametres.module').then(m => m.ParametresPageModule)
      },
    ]
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomePageModule)
  },
  { path: 'inscription',
    loadChildren: () => import('./components/inscription/inscription.module').then(m => m.InscriptionPageModule)
  },
  {
    path: 'ambulance',
    component: AmbulancePage,
    children: [
      {
        path: 'gestion',
        loadChildren: () => import('./components/ambulance/gestion-reservation/gestion-reservation.module').then(m => m.GestionReservationPageModule)
      },
      {
        path: 'parametres-ambu',
        loadChildren: () => import('./components/ambulance/parametres-ambu/parametres-ambu.module').then(m => m.ParametresAmbuPageModule)
      },
      {
        path: 'histo-ambulance',
        loadChildren: () => import('./components/ambulance/histo-ambulance/histo-ambulance.module').then(m => m.HistoAmbulancePageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
