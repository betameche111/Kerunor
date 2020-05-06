import { TextureLoader, SpriteMaterial, Sprite } from 'three';
import interestPoint from "./assets/img/poi.svg";
import interestPointHover from "./assets/img/poi_hover.svg";
import UIkit from 'uikit/dist/js/uikit.js';

import ImgDuSableEtDesFleurs1 from './assets/img/DuSableEtDesFleurs1.jpg';
import ImgDuSableEtDesFleurs2 from './assets/img/DuSableEtDesFleurs2.jpg';
import ImgLaDesolationDeChereskan from './assets/img/LaDesolationDeChereskan.jpg';
import ImgLeDesertDeRenzary from './assets/img/LeDesertDeRenzary.jpg';
import ImgLesMontsGlacesDeTarguenor from './assets/img/LesMontsGlacesDeTarguenor.jpg';
import ImgLesRuinesDeXeros from './assets/img/LesRuinesDeXeros.jpg';
import ImgLesTerresBriseesEltagar from './assets/img/LesTerresBriseesEltagar.jpg';
import ImgRivglace from './assets/img/Rivglace.jpg';
import ImgSkanraFoudroyant from './assets/img/SkanraFoudroyant.jpg';
import ImgAledarion from './assets/img/Aledarion.jpg';
import ImgFeryan from './assets/img/Feryan.jpg';
import ImgKopaek from './assets/img/Kopaek.jpg';
import ImgOrolux1 from './assets/img/Orolux1.jpg';
import ImgOrolux2 from './assets/img/Orolux2.jpg';
import ImgRamuron from './assets/img/Ramuron.jpg';
import ImgShalakMham from './assets/img/ShalakMham.jpg';
import ImgZerufon from './assets/img/Zerufon.jpg';

var spriteMap = new TextureLoader().load(interestPoint);
var spriteMaterial = new SpriteMaterial({ map: spriteMap });
var spriteHoverMap = new TextureLoader().load(interestPointHover);
var spriteHoverMaterial = new SpriteMaterial({ map: spriteHoverMap });

var Poi = [];

// Modifier à partir d'ici !
 
var PoiDuSableEtDesFleurs = new Sprite(spriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
PoiDuSableEtDesFleurs.position.set(0, 500, -8000);  // Modifier pour changer la position du POI
PoiDuSableEtDesFleurs.img = [ImgDuSableEtDesFleurs1, ImgDuSableEtDesFleurs2]; // Choix des images pour le POI
PoiDuSableEtDesFleurs.title = ["Du sable et des fleurs", "Photo du sable avec des fleur mais pas pareil"]; // Choix des titres pour le POI
PoiDuSableEtDesFleurs.text = ["j'aime la bite et le paté ", "<p>Attention Vent qui mord</p> <p>mais ne vous inquietez pas il est quand meme gentil</p>"]; // Choix des textes pour le POI (remplacer les retours à la ligne par \n)
Poi.push(PoiDuSableEtDesFleurs); // Ne changer que le nom

var PoiLaDesolationDeChereskan = new Sprite(spriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
PoiLaDesolationDeChereskan.position.set(-12000, 1500, 5000);  // Modifier pour changer la position du POI
PoiLaDesolationDeChereskan.img = [ImgLaDesolationDeChereskan]; // Choix des images pour le POI
PoiLaDesolationDeChereskan.title = ["La Desolation De Chereskan"]; // Choix des titres pour le POI
PoiLaDesolationDeChereskan.text = ["<p>Attention Vent qui mord</p> <p>mais ne vous inquietez pas il est quand meme gentil</p>"]; // Choix des textes pour le POI (Mettre les paragraphe entre <p></p>)
Poi.push(PoiLaDesolationDeChereskan); // Ne changer que le nom

var PoiLeDesertDeRenzary = new Sprite(spriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
PoiLeDesertDeRenzary.position.set(2000, 500, -6000);  // Modifier pour changer la position du POI
PoiLeDesertDeRenzary.img = [ImgLeDesertDeRenzary]; // Choix des images pour le POI
PoiLeDesertDeRenzary.title = ["Le Desert De Renzary"]; // Choix des titres pour le POI
PoiLeDesertDeRenzary.text = ["<p>Attention Vent qui mord</p> <p>mais ne vous inquietez pas il est quand meme gentil</p>"]; // Choix des textes pour le POI (Mettre les paragraphe entre <p></p>)
Poi.push(PoiLeDesertDeRenzary); // Ne changer que le nom

var PoiLesMontsGlacesDeTarguenor = new Sprite(spriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
PoiLesMontsGlacesDeTarguenor.position.set(8000, 2300, 6300);  // Modifier pour changer la position du POI
PoiLesMontsGlacesDeTarguenor.img = [ImgLesMontsGlacesDeTarguenor]; // Choix des images pour le POI
PoiLesMontsGlacesDeTarguenor.title = ["Les Monts Glacés De Targuenor"]; // Choix des titres pour le POI
PoiLesMontsGlacesDeTarguenor.text = ["<p>Attention Vent qui mord</p> <p>mais ne vous inquietez pas il est quand meme gentil</p>"]; // Choix des textes pour le POI (Mettre les paragraphe entre <p></p>)
Poi.push(PoiLesMontsGlacesDeTarguenor); // Ne changer que le nom

var PoiLesRuinesDeXeros = new Sprite(spriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
PoiLesRuinesDeXeros.position.set(16000, 1500, -1500);  // Modifier pour changer la position du POI
PoiLesRuinesDeXeros.img = [ImgLesRuinesDeXeros]; // Choix des images pour le POI
PoiLesRuinesDeXeros.title = ["Les Ruines De Xeros"]; // Choix des titres pour le POI
PoiLesRuinesDeXeros.text = ["<p>Attention Vent qui mord</p> <p>mais ne vous inquietez pas il est quand meme gentil</p>"]; // Choix des textes pour le POI (Mettre les paragraphe entre <p></p>)
Poi.push(PoiLesRuinesDeXeros); // Ne changer que le nom

var PoiLesTerresBriseesEltagar = new Sprite(spriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
PoiLesTerresBriseesEltagar.position.set(-14000, 1000, -7500);  // Modifier pour changer la position du POI
PoiLesTerresBriseesEltagar.img = [ImgLesTerresBriseesEltagar]; // Choix des images pour le POI
PoiLesTerresBriseesEltagar.title = ["Les Terres Brisees d'Eltagar"]; // Choix des titres pour le POI
PoiLesTerresBriseesEltagar.text = ["<p>Attention Vent qui mord</p> <p>mais ne vous inquietez pas il est quand meme gentil</p>"]; // Choix des textes pour le POI (Mettre les paragraphe entre <p></p>)
Poi.push(PoiLesTerresBriseesEltagar); // Ne changer que le nom

var PoiRivglace = new Sprite(spriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
PoiRivglace.position.set(11700, 500, 3200);  // Modifier pour changer la position du POI
PoiRivglace.img = [ImgRivglace]; // Choix des images pour le POI
PoiRivglace.title = ["Rivglace"]; // Choix des titres pour le POI
PoiRivglace.text = ["<p>Attention Vent qui mord</p> <p>mais ne vous inquietez pas il est quand meme gentil</p>"]; // Choix des textes pour le POI (Mettre les paragraphe entre <p></p>)
Poi.push(PoiRivglace); // Ne changer que le nom

var PoiSkanraFoudroyant = new Sprite(spriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
PoiSkanraFoudroyant.position.set(2300, 500, -7200);  // Modifier pour changer la position du POI
PoiSkanraFoudroyant.img = [ImgSkanraFoudroyant]; // Choix des images pour le POI
PoiSkanraFoudroyant.title = ["Skanra Foudroyant"]; // Choix des titres pour le POI
PoiSkanraFoudroyant.text = ["<p>Attention Vent qui mord</p> <p>mais ne vous inquietez pas il est quand meme gentil</p>"]; // Choix des textes pour le POI (Mettre les paragraphe entre <p></p>)
Poi.push(PoiSkanraFoudroyant); // Ne changer que le nom

var PoiAledarion = new Sprite(spriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
PoiAledarion.position.set(13000, 500, 8500);  // Modifier pour changer la position du POI
PoiAledarion.img = [ImgAledarion]; // Choix des images pour le POI
PoiAledarion.title = ["Aledarion"]; // Choix des titres pour le POI
PoiAledarion.text = ["<p>Attention Vent qui mord</p> <p>mais ne vous inquietez pas il est quand meme gentil</p>"]; // Choix des textes pour le POI (Mettre les paragraphe entre <p></p>)
Poi.push(PoiAledarion); // Ne changer que le nom

var PoiFeryan = new Sprite(spriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
PoiFeryan.position.set(5300, 500, -8000);  // Modifier pour changer la position du POI
PoiFeryan.img = [ImgFeryan]; // Choix des images pour le POI
PoiFeryan.title = ["Feryan"]; // Choix des titres pour le POI
PoiFeryan.text = ["<p>Attention Vent qui mord</p> <p>mais ne vous inquietez pas il est quand meme gentil</p>"]; // Choix des textes pour le POI (Mettre les paragraphe entre <p></p>)
Poi.push(PoiFeryan); // Ne changer que le nom

var PoiKopaek = new Sprite(spriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
PoiKopaek.position.set(16500, 1000, 500);  // Modifier pour changer la position du POI
PoiKopaek.img = [ImgKopaek]; // Choix des images pour le POI
PoiKopaek.title = ["Kopaek"]; // Choix des titres pour le POI
PoiKopaek.text = ["<p>Attention Vent qui mord</p> <p>mais ne vous inquietez pas il est quand meme gentil</p>"]; // Choix des textes pour le POI (Mettre les paragraphe entre <p></p>)
Poi.push(PoiKopaek); // Ne changer que le nom

var PoiOrolux = new Sprite(spriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
PoiOrolux.position.set(11000, 500, 4500);  // Modifier pour changer la position du POI
PoiOrolux.img = [ImgOrolux1, ImgOrolux2]; // Choix des images pour le POI
PoiOrolux.title = ["Orolux", "Orolux2"]; // Choix des titres pour le POI
PoiOrolux.text = ["j'aime la bite et le paté ", "<p>Attention Vent qui mord</p> <p>mais ne vous inquietez pas il est quand meme gentil</p>"]; // Choix des textes pour le POI (remplacer les retours à la ligne par \n)
Poi.push(PoiOrolux); // Ne changer que le nom

var PoiRamuron = new Sprite(spriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
PoiRamuron.position.set(12500, 500, -2600);  // Modifier pour changer la position du POI
PoiRamuron.img = [ImgRamuron]; // Choix des images pour le POI
PoiRamuron.title = ["Ramuron"]; // Choix des titres pour le POI
PoiRamuron.text = ["<p>Attention Vent qui mord</p> <p>mais ne vous inquietez pas il est quand meme gentil</p>"]; // Choix des textes pour le POI (Mettre les paragraphe entre <p></p>)
Poi.push(PoiRamuron); // Ne changer que le nom

var PoiShalakMham = new Sprite(spriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
PoiShalakMham.position.set(2300, 500, -10000);  // Modifier pour changer la position du POI
PoiShalakMham.img = [ImgShalakMham]; // Choix des images pour le POI
PoiShalakMham.title = ["ShalakMham"]; // Choix des titres pour le POI
PoiShalakMham.text = ["<p>Attention Vent qui mord</p> <p>mais ne vous inquietez pas il est quand meme gentil</p>"]; // Choix des textes pour le POI (Mettre les paragraphe entre <p></p>)
Poi.push(PoiShalakMham); // Ne changer que le nom

var PoiZerufon = new Sprite(spriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
PoiZerufon.position.set(5600, 500, -5200);  // Modifier pour changer la position du POI
PoiZerufon.img = [ImgZerufon]; // Choix des images pour le POI
PoiZerufon.title = ["Zerufon"]; // Choix des titres pour le POI
PoiZerufon.text = ["<p>Attention Vent qui mord</p> <p>mais ne vous inquietez pas il est quand meme gentil</p>"]; // Choix des textes pour le POI (Mettre les paragraphe entre <p></p>)
Poi.push(PoiZerufon); // Ne changer que le nom

// Ne plus modifier a partir d'ici !!!

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