import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

const routes: Routes = [
  { path: '', component: MoviesListComponent },
  { path: 'detail', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
