import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdeaRoutingModule } from './idea-routing.module';
import {IdeaService} from './idea.service';
import {IdeasResolver} from './routeResolvers/ideas-resolver';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    IdeaRoutingModule,
  ],
  declarations: [],
  providers: [
    IdeaService,
    IdeasResolver
  ]
})
export class IdeaModule { }
