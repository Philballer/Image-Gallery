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
import { FooterComponent } from './components/footer/footer.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteVerificationComponent } from './components/delete-verification/delete-verification.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddImageFormComponent,
    SearchbarComponent,
    ImageGalleryComponent,
    SingleImageComponent,
    FooterComponent,
    DeleteVerificationComponent,
    ImageViewerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
