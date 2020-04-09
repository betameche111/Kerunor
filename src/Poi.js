import { TextureLoader, SpriteMaterial, Sprite } from 'three';
import interestPoint from "./assets/img/poi.svg";

var spriteMap = new TextureLoader().load(interestPoint);
var spriteMaterial = new SpriteMaterial({ map: spriteMap });


var Poi = new Sprite(spriteMaterial);
Poi.scale.set(700, 700, 700);
Poi.position.set(1300, 1700, -5000);


export { Poi };