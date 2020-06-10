import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiSuperHeroService } from '../../services/api-super-hero.service';
import { pluck, switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-detail-hero',
  templateUrl: './detail-hero.component.html',
  styleUrls: ['./detail-hero.component.css']
})
export class DetailHeroComponent implements OnInit {

  public detalleSuper: any;
  public loading: boolean = false;
  public first: any; 

  constructor(private activatedRouter: ActivatedRoute, private apiSuperHeroe: ApiSuperHeroService) { 
    this.loading = true;
    this.activatedRouter
      .params
      .pipe(
        pluck('id'),
        switchMap((id) => this.apiSuperHeroe.ObtenerSuperHeroe(id).pipe(
          map((superHeroe: any) => {
            let superFiltrado: any = {
              nombre: superHeroe.name, 
              biografia: superHeroe.biography, 
              imagen: superHeroe.image.url,
              estadisticas: superHeroe.powerstats,
              aparicion: superHeroe.biography['first-appearance']
            };
            return superFiltrado;
          })
        ))
      ).subscribe((superHeroe: any) => {
        this.detalleSuper = superHeroe;
        console.log(this.detalleSuper);
        this.loading = false;
      });
  }

  ngOnInit(): void {
  }

}
