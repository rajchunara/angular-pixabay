import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ImageContainerComponent } from './components/image-container/image-container.component';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
 
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ImageContainerComponent,
    HomeViewComponent,
    ImageCardComponent,
    UserViewComponent,
    ImageDialogComponent,
    LoginFormComponent
  ],
  entryComponents:[ImageDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
