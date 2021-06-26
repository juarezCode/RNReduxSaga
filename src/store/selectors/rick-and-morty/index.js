import { rickAndMortyKey } from '../../reducers/rick-and-morty';

export const selectRickAndMortyState = state => state[rickAndMortyKey];
