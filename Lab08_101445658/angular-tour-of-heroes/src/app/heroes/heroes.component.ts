import { Component } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import {HEROES} from '../mock-heroes';
import { RemoveSpacesPipe } from '../remove-spaces.pipe';

@Component({
  standalone: true,
  selector: 'app-heroes',
  imports: [
    NgFor, 
    FormsModule,
    NgIf,
    UpperCasePipe,
    RemoveSpacesPipe
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
