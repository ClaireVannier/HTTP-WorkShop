import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonServiceService } from './services/pokemon-service.service';
import { CommonModule } from '@angular/common';
import { Pokemon } from './models/pokemonResult.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'WorkShop-HTTP';

  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonServiceService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe((response) => {
      this.pokemons = response.data;
    });
  }
}
