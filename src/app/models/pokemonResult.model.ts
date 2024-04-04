import { PokemonImages } from './pokemonImage.model';

export interface Pokemon {
  id: string; 
  name: string;
  images: PokemonImages;
}
