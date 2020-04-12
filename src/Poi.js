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
poi1.img = poi1img;
poi1.img2 = poi2img
Poi.push(poi1);

var poi2 = new Sprite(spriteMaterial);
poi2.position.set(700, 900, 8000);
poi2.img = poi2img;
poi2.img2 = poi1img;
Poi.push(poi2);


Poi.forEach((element) => {
    element.scale.set(700, 700, 700);
    element.hover = () => element.material = spriteHoverMaterial;
    element.unhover = () => element.material = spriteMaterial;
    element.click = () => {
        UIkit.modal(document.getElementById("modal")).show();
        document.getElementById("modal-img").setAttribute("data-src", element.img);
        document.getElementById("modal-img-2").setAttribute("data-src", element.img2);
    }
});


export { Poi };