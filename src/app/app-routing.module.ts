import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
        {path: '**', component: PageNotFoundComponent},
      ]
    )
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
