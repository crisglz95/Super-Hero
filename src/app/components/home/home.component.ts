import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { ApiSuperHeroService } from '../../services/api-super-hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public arrayHeroes: Array<any> = [];
  public loading: boolean = false;
  public indicePagina: number = 1;
  public id:Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  constructor(private http: HttpClient, private apiHeroe: ApiSuperHeroService) { 
    this.getHeroes();
  }

  ngOnInit(): void {
  }

  public getHeroes(){
    this.arrayHeroes = [];
    from(this.id).pipe(
      concatMap((id: number) => this.apiHeroe.ObtenerSuperHeroe(id)
      .pipe(
        map((SuperHeroe: any) => {
          let SuperHeroeInfo: any = {
            id: SuperHeroe.id,
            nombre: SuperHeroe.name, 
            imagen: SuperHeroe.image.url
          }
          return SuperHeroeInfo;
        })
      ))
    ).subscribe((SuperHeroe: any) =>{
      this.arrayHeroes.push(SuperHeroe);
    })
  }

  public PaginacionLeft(){
    if (this.indicePagina == 1) return;
    this.indicePagina--;
    for(let i = 0; i < this.id.length; i++){
        this.id[i] -= 12;
    }
    console.log(this.id);
    this.getHeroes();
  }

  public PaginacionRight(){
    this.indicePagina++;
    for(let i = 0; i < this.id.length; i++){
      this.id[i] += 12;
    }
    console.log(this.id);
    this.getHeroes();
  }

}
