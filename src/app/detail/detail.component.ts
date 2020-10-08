import { Component, Input, OnInit } from '@angular/core';
import { MoviesListComponent } from '../movies-list/movies-list.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() movie:MoviesListComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
