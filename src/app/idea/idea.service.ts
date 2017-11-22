import {Injectable} from '@angular/core';
import {IIdea} from './idea';
import {Constants} from '../constants';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Response } from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class IdeaService {

  constructor(private http: HttpClient) {
  }

  getIdeas(): Observable<IIdea[]> {
    return this.http.get(Constants.API_URL + '/ideas')
      .map(data => {
        return data;
      })
      .do(data => console.log('getIdeas: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private extractData(response: Response) {
    const body = response.json();
    return body.results || {};
  }

  private handleError(error: Response): Observable<any> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
