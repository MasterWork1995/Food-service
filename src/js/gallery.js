import galleryCards from '../templates/gallery-items.hbs';
import cards from '../menu.json';


const markupRef = document.querySelector('.js-menu');

markupRef.insertAdjacentHTML('afterbegin', galleryCards(cards));