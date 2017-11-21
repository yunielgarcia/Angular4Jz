import { Injectable } from '@angular/core';
import {IIdea} from './idea';

@Injectable()
export class IdeaService {

  constructor() { }

  getIdeas(): IIdea[] {
    return [
      {
        "title": "Idea uno"
      }
    ];
  }

}
