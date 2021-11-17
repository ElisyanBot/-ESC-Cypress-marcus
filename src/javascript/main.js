// For all
import MobileMeny from './functions/mobileMeny.js';

MobileMeny();

// For index
import indexRenderChallenges from './functions/indexRenderChallenges.js';
if (document.querySelector("#card-articles-container")) {
  indexRenderChallenges();
}

// For challenge
import renderChallenges from './functions/renderChallenges.js';
import filterByType from './functions/filterByType.js';
if (document.querySelector("#card-section")) {
  renderChallenges();
  filterByType();
};