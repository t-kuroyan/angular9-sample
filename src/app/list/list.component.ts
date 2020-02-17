import { Component, OnInit } from '@angular/core';
import { Heroes } from './params/heroes';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  heroes = [
    { id: 1, name: 'A', selected: false },
    { id: 2, name: 'B', selected: false },
    { id: 3, name: 'C', selected: false },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onChangeChecked(): void {
    console.log(JSON.stringify(this.heroes));
  }

  jsonValue(hero: any) {
    return JSON.stringify(hero)
  }

}
