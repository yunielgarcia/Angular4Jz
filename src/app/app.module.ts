import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './PageNotFound.component';
import {AboutModule} from './about/about.module';


@NgModule({
  imports: [
    BrowserModule,
    HomeModule,
    AboutModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
