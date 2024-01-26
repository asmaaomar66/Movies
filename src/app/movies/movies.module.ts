import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { SearchComponent } from './components/search/search.component';
import { MoveDetailsComponent } from './components/move-details/move-details.component';
import { CarouselModule } from 'primeng/carousel';
import {ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    MoviesComponent,
    SearchComponent,
    MoveDetailsComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    CarouselModule,
    ReactiveFormsModule,
  ]
})
export class MoviesModule { }
