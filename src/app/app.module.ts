import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddImageFormComponent } from './components/add-image-form/add-image-form.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { SingleImageComponent } from './components/single-image/single-image.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddImageFormComponent,
    SearchbarComponent,
    ImageGalleryComponent,
    SingleImageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
