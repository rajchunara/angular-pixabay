import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ImageContainerComponent } from './components/image-container/image-container.component';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
 
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ImageContainerComponent,
    HomeViewComponent,
    ImageCardComponent,
    UserViewComponent,
    ImageDialogComponent
  ],
  entryComponents:[ImageDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
