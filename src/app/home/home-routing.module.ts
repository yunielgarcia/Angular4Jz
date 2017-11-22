import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {IdeasResolver} from '../idea/routeResolvers/ideas-resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {ideas: IdeasResolver}
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
