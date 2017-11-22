import { Component, OnInit } from '@angular/core';
import {IIdea} from '../idea/idea';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ideas: IIdea[];
  test: string = 'testing binding';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.ideas = this.route.snapshot.data['ideas'].results;
  }

}
