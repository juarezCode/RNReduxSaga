import { combineReducers } from 'redux';
import {
  characterDetailKey,
  characterDetailReducer,
} from './character-detail.reducer';
import { charactersKey, charactersReducer } from './characters.reducer';

export const rickAndMortyKey = 'rickAndMorty';

export const rickAndMortyReducer = combineReducers({
  [charactersKey]: charactersReducer,
  [characterDetailKey]: characterDetailReducer,
});
