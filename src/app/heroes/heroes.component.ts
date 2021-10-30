import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/mock-heroes';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  constructor() {}

  ngOnInit(): void {
    console.log(this.selectedHero);
  }
}
