import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IIdea} from '../idea';
import {Observable} from 'rxjs/Observable';
import {IdeaService} from '../idea.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class IdeasResolver implements Resolve<IIdea[]> {

  constructor(private ideaService: IdeaService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IIdea[]> {
    return this.ideaService.getIdeas()
      .map(ideas => {
        if (ideas) {
          return ideas;
        }
        console.log(`Ideas not found`);
        return null;
      })
      .catch(err => {
        console.log(`Retrieval error ${err}`);
        return Observable.of(null);
      });
  }
}
