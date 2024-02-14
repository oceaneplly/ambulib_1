import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  private url;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.url = "https://ambulib.tech/API/public/api/profils";
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

  post(entity: any, token: any) {
    const headers = {'X-Auth-Token': token };
    return this.http.post(this.url, entity, { headers : headers });
  }

  put(entity: any, token: any) {
    const headers = {'X-Auth-Token': token };
    return this.http.put(this.url + '/' + entity.id, entity, { headers : headers });
  }

  delete(id: any, token: any) {
    const headers = {'X-Auth-Token': token };
    return this.http.delete(this.url + '/' + id, { headers : headers});
  }
}
