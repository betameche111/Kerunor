import { TextureLoader, SpriteMaterial, Sprite } from 'three';
import interestPoint from "./assets/img/poi.svg";
import interestPointHover from "./assets/img/poi_hover.svg";
import UIkit from 'uikit/dist/js/uikit.js';

import poi1img from './assets/img/poi1.jpg';
import poi2img from './assets/img/poi2.jpg';

var spriteMap = new TextureLoader().load(interestPoint);
var spriteMaterial = new SpriteMaterial({ map: spriteMap });
var spriteHoverMap = new TextureLoader().load(interestPointHover);
var spriteHoverMaterial = new SpriteMaterial({ map: spriteHoverMap });

var Poi = [];

var poi1 = new Sprite(spriteMaterial);
poi1.position.set(1300, 1700, -5000);
poi1.img = [poi1img, poi2img];
poi1.title = ["Poi 1 Titre 1", "Poi 1 Titre 2"];
poi1.text = ["Je suis le texte 1", "Je suis le texte 2"];
Poi.push(poi1);

var poi2 = new Sprite(spriteMaterial);
poi2.position.set(700, 900, 8000);
poi2.img = [poi2img, poi1img];
poi2.title = ["Poi 2 Titre 1", "Poi 2 Titre 2"];
poi2.text = ["Je suis le texte 1", "Je suis le texte 2"];
Poi.push(poi2);


Poi.forEach((element) => {
    element.scale.set(700, 700, 700);
    element.hover = () => element.material = spriteHoverMaterial;
    element.unhover = () => element.material = spriteMaterial;
    element.renderOrder = 1;
    element.click = () => {
        const modalElement = document.getElementById("modal-content");
        modalElement.innerHTML = '<button class="uk-modal-close-full uk-close-large" type="button" style="background-color: rgba(255, 255, 255, 0.0);" uk-close></button>';
        for (var i = 0; i < element.img.length; i++) {
            modalElement.innerHTML = modalElement.innerHTML +
                '<div class="uk-grid-collapse uk-flex-middle uk-height-viewport" uk-grid>' +
                '<div class="uk-width-expand uk-flex-middle uk-flex">' +
                '<img class="uk-padding-small" src="' + element.img[i] + '">' +
                '</div>' +
                '<div class="uk-padding-large uk-width-1-4 uk-light">' +
                '<h1 id="modal-head">' + element.title[i] + '</h1>' +
                '<p id="modal-text">' + element.text[i] + '</p>' +
                '</div>' +
                '</div>';
        }
        UIkit.modal(document.getElementById("modal")).show();
    };
});


export { Poi };