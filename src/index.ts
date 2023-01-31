import { CardContainer } from './components/card-container/card-container';
import { CharactersList } from './components/characters-list/characters-list';
import { charactersArr } from './mocks/charactersData';

console.log(charactersArr);

const cardContainer = new CardContainer('#app');
const characterList = new CharactersList('.characters-list');

cardContainer.render('afterbegin');
characterList.render('afterbegin');
