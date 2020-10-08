import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  pageSize = 10;
  searchText;
  page = 1
  dropdownList = [];
  selectedItems = [];
 
  dropdownSettings:IDropdownSettings = {};

 movies = [
    {
      quality: 'HDRip',
      cover: '//static.fmovies.to/i/cache/images/9/9d/9dfe0d54b9a27f32af9b1f437b0851db.jpg-w180',
      title: 'Black Box',
      year: '2020',
      time: '100 min',
      type: 'Movie'
    },
    {
      quality: 'HD',
      cover: '//static.fmovies.to/i/cache/images/c/c7/c7412d62773fe6405bdc829e85b9217f.jpg-w180',
      title: 'Anonymous Killers',
      year: '2020',
      time: '100 min',
      type: 'Movie'
    },
    {
      quality: 'HD',
      cover: '//static.fmovies.to/i/cache/images/c/cf/cf7e3b0f9a1a5a3a362726046f11e714.jpg-w180',
      title: 'Dying to be a Cheerleader',
      year: '2020',
      time: '100 min',
      type: 'Movie'
    },
    {
      quality: 'HDRip',
      cover: '//static.fmovies.to/i/cache/images/e/e6/e68997117cc8c938c0c7f9d8a5a8ab8b.jpg-w180',
      title: 'Michael McIntyre: Showman',
      year: '2020',
      time: '100 min',
      type: 'Movie'
    },
    {
      quality: 'HDRip',
      cover: '//static.fmovies.to/i/cache/images/2/25/2577f5fb8b6eec983a622ee8d51dfe07.jpg-w180',
      title: 'David Attenborough: A Life on Our Planet',
      year: '2020',
      time: '100 min',
      type: 'Movie'
    },
    {
      quality: 'HDRip',
      cover: '//static.fmovies.to/i/cache/images/9/99/99414859dbaecd4929ad1c74b9d778f2.jpg-w180',
      title: 'Times & Measures',
      year: '2020',
      time: '100 min',
      type: 'Movie'
    },
    {
      quality: 'CAM',
      cover: '//static.fmovies.to/i/cache/images/b/bb/bb908759d797298ef918158546095feb.jpg-w180',
      title: 'Shortcut',
      year: '2020',
      time: '100 min',
      type: 'Movie'
    },
    {
      quality: 'CAM',
      cover: '//static.fmovies.to/i/cache/images/6/65/655bd3883c74d377a71f16d4cb7d7a8d.jpg-w180',
      title: 'On the Rocks',
      year: '2016',
      time: '89 min',
      type: 'Drama'
    },
    {
      quality: 'HD',
      cover: '//static.fmovies.to/i/cache/images/e/e4/e4e712c5cad6f5309998a874f5e9c7d8.jpg-w180',
      title: 'Savage X Fenty Show Vol. 2',
      year: '2016',
      time: '89 min',
      type: 'Drama'
    },
    {
      quality: 'HD',
      cover: '//static.fmovies.to/i/cache/images/c/c1/c1c71dbdb048159f3fb8c04c77fe9ba7.jpg-w180',
      title: 'The Binding',
      year: '2016',
      time: '89 min',
      type: 'Drama'
    },
    {
      quality: 'HD',
      cover: '//static.fmovies.to/i/cache/images/2/25/25f0bf60d20cfbe972e44915ce0c906c.jpg-w180',
      title: 'In My Room',
      year: '2016',
      time: '89 min',
      type: 'Drama'
    },
    {
      quality: 'HD',
      cover: '//static.fmovies.to/i/cache/images/b/b9/b90d28f36a1f450e5b51b019f150ba38.jpg-w180',
      title: 'Unfit: The Psychology of Donald Trump',
      year: '2016',
      time: '89 min',
      type: 'Drama'
    },
    {
      quality: 'HD',
      cover: '//static.fmovies.to/i/cache/images/c/cf/cf7e3b0f9a1a5a3a362726046f11e714.jpg-w180',
      title: 'Dying to be a Cheerleader',
      year: '2020',
      time: '100 min',
      type: 'Movie'
    },
    {
      quality: 'HDRip',
      cover: '//static.fmovies.to/i/cache/images/e/e6/e68997117cc8c938c0c7f9d8a5a8ab8b.jpg-w180',
      title: 'Michael McIntyre: Showman',
      year: '2020',
      time: '100 min',
      type: 'Movie'
    },
    {
      quality: 'HDRip',
      cover: '//static.fmovies.to/i/cache/images/2/25/2577f5fb8b6eec983a622ee8d51dfe07.jpg-w180',
      title: 'David Attenborough: A Life on Our Planet',
      year: '2020',
      time: '100 min',
      type: 'Movie'
    },
    {
      quality: 'HDRip',
      cover: '//static.fmovies.to/i/cache/images/9/99/99414859dbaecd4929ad1c74b9d778f2.jpg-w180',
      title: 'Times & Measures',
      year: '2020',
      time: '100 min',
      type: 'Movie'
    },
    {
      quality: 'CAM',
      cover: '//static.fmovies.to/i/cache/images/b/bb/bb908759d797298ef918158546095feb.jpg-w180',
      title: 'Shortcut',
      year: '2020',
      time: '100 min',
      type: 'Movie'
    },
    {
      quality: 'CAM',
      cover: '//static.fmovies.to/i/cache/images/6/65/655bd3883c74d377a71f16d4cb7d7a8d.jpg-w180',
      title: 'On the Rocks',
      year: '2016',
      time: '89 min',
      type: 'Drama'
    },
    {
      quality: 'HD',
      cover: '//static.fmovies.to/i/cache/images/e/e4/e4e712c5cad6f5309998a874f5e9c7d8.jpg-w180',
      title: 'Savage X Fenty Show Vol. 2',
      year: '2016',
      time: '89 min',
      type: 'Drama'
    },
    {
      quality: 'HD',
      cover: '//static.fmovies.to/i/cache/images/c/c1/c1c71dbdb048159f3fb8c04c77fe9ba7.jpg-w180',
      title: 'The Binding',
      year: '2016',
      time: '89 min',
      type: 'Drama'
    },
    {
      quality: 'HD',
      cover: '//static.fmovies.to/i/cache/images/2/25/25f0bf60d20cfbe972e44915ce0c906c.jpg-w180',
      title: 'In My Room',
      year: '2016',
      time: '89 min',
      type: 'Drama'
    },
    {
      quality: 'HD',
      cover: '//static.fmovies.to/i/cache/images/b/b9/b90d28f36a1f450e5b51b019f150ba38.jpg-w180',
      title: 'Unfit: The Psychology of Donald Trump',
      year: '2016',
      time: '89 min',
      type: 'Drama'
    }
    ];

   
  constructor() { }
  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Movie' },
      { item_id: 2, item_text: 'Tv Series' },
     

    ];
    this.selectedItems = [
      { item_id: 1, item_text: 'Movie' },
     
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  
}