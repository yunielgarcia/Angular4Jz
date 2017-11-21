import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HomeModule} from './home/home.module';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './page-not-found.component';
import {AboutModule} from './about/about.module';
import {IdeaModule} from './idea/idea.module';


@NgModule({
  imports: [
    BrowserModule,
    HomeModule,
    AboutModule,
    IdeaModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
