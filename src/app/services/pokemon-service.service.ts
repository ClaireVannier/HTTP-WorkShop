import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { PokemonResponse } from '../models/pokemonResponse.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonServiceService {
  
  constructor(private http: HttpClient) {}

  getPokemon(): Observable<PokemonResponse> {
    const url = `https://api.pokemontcg.io/v2/cards/?api_key=${environment.apiKey}`;
    return this.http.get<PokemonResponse>(url);
  }
}