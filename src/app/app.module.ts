import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { FormsModule } from '@angular/forms';
import { ImageSrcPipe } from './shared/image-src.pipe';
import { SharedModule } from './shared/shared.module';
import { DetailComponent } from './detail/detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    ImageSrcPipe,
    DetailComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
   FormsModule,
   NgMultiSelectDropDownModule,
   SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
