import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiSuperHeroService {

  private url = 'https://www.superheroapi.com/api.php/271791440634137/';

  constructor(private http: HttpClient) { }

  public ObtenerSuperHeroe(id){
    return this.http.get(`${this.url}${id}`);
  }

}
