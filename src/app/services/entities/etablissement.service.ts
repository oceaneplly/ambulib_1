import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {

  private url;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.url = "https://ambulib.tech/API/public/api/etablissements";
  }

  getAll(): any {
    return this.http.get(this.url);
  }

  getWithFilters(filters: Map<string, Array<any>>): any {
    // ajout des filtres
    let myParams = new HttpParams();
    filters.forEach((value, key) => {
      myParams = myParams.set(key, value.toString());
    });
    return this.http.get(this.url, { params: myParams });
  }

  post(entity: any) {
    return this.http.post(this.url, entity);
  }

  put(entity: any) {
    return this.http.put(this.url + '/' + entity.id, entity);
  }

  delete(id: any) {
    return this.http.delete(this.url + '/' + id);
  }
}
