import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fromEvent, from } from 'rxjs';
import { debounceTime, pluck, switchMap, map, concatMap } from 'rxjs/operators';
import { HeroeResultado } from '../../interfaces/superheroe.interface';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.css']
})
export class SearchHeroComponent implements OnInit {

  @ViewChild('inputSearch') inputSearch: ElementRef;
  private url = 'https://superheroapi.com/api.php/271791440634137/search/';
  public heroeRecibido: Array<any> = [];
  public loading = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.SearchHero();
  }

  public SearchHero(){
    this.heroeRecibido = [];
    this.loading = true;
    fromEvent(this.inputSearch.nativeElement, 'keyup')
      .pipe(
        pluck('target', 'value'),
        debounceTime(1500),
        switchMap(nombreHeroe => this.http.get(`${this.url}${nombreHeroe}`)
        .pipe(
          pluck('results'),
          switchMap((resultArray: Array<any>) => 
            from(resultArray)
            .pipe(
              map((superheroe: any) => {
                let superResult: any = {
                  id: superheroe.id,
                  nombre: superheroe.name, 
                  imagen: superheroe.image
                }
                return superResult;
              })
            )
          )
        ))
      )
      .subscribe((superheroe: any) =>{
        console.log(superheroe);
        this.heroeRecibido.push(superheroe);
        this.loading = false;
      },
      () => this.SearchHero()
      );
  }

}
