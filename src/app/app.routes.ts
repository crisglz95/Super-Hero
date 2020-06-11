import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailHeroComponent } from './components/detail-hero/detail-hero.component';
import { SearchHeroComponent } from './components/search-hero/search-hero.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'detail/:id', component: DetailHeroComponent},
    { path: 'search', component: SearchHeroComponent },
    { path: '**', pathMatch:'full', redirectTo: '' }
];

export const appRouting = RouterModule.forRoot(routes);