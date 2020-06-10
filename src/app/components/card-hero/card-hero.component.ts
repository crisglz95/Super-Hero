import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.css']
})
export class CardHeroComponent implements OnInit {
  
  @Input() heroeRecibido: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public GoToDescription(id: number){
    this.router.navigate(['detail', id]);
  }

}
