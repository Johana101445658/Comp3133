import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputFormatDirective } from './input-format.directive';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroesComponent, NgFor, FormsModule, InputFormatDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Heroes';
}
