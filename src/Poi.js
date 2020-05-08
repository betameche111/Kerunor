import { TextureLoader, SpriteMaterial, Sprite } from 'three';
import interestPoint from "./assets/img/poi.svg";
import interestPointHover from "./assets/img/poi_hover.svg";
import EltagarPoint from "./assets/img/Eltagar.png";
import EltagarPointHover from "./assets/img/Eltagar_hover.png";
import ReskanPoint from "./assets/img/Reskan.png";
import ReskanPointHover from "./assets/img/Reskan_hover.png";
import TarguenorPoint from "./assets/img/Targuenor.png";
import TarguenorPointHover from "./assets/img/Targuenor_hover.png";
import XerosPoint from "./assets/img/Xeros.png";
import XerosPointHover from "./assets/img/Xeros_hover.png";
import RenzaryPoint from "./assets/img/Renzary.png";
import RenzaryPointHover from "./assets/img/Renzary_hover.png";
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

var poiSpriteMap = new TextureLoader().load(interestPoint);
var poiSpriteMaterial = new SpriteMaterial({ map: poiSpriteMap });

var poiSpriteHoverMap = new TextureLoader().load(interestPointHover);
var poiSpriteHoverMaterial = new SpriteMaterial({ map: poiSpriteHoverMap });

var eltagarSpriteMap = new TextureLoader().load(EltagarPoint);
var eltagarSpriteMaterial = new SpriteMaterial({ map: eltagarSpriteMap });

var eltagarSpritHoverMap = new TextureLoader().load(EltagarPointHover);
var eltagarSpriteHoverMaterial = new SpriteMaterial({ map: eltagarSpritHoverMap });

var reskanSpriteMap = new TextureLoader().load(ReskanPoint);
var reskanSpriteMaterial = new SpriteMaterial({ map: reskanSpriteMap });

var reskanSpritHoverMap = new TextureLoader().load(ReskanPointHover);
var reskanSpriteHoverMaterial = new SpriteMaterial({ map: reskanSpritHoverMap });

var targuenorSpriteMap = new TextureLoader().load(TarguenorPoint);
var targuenorSpriteMaterial = new SpriteMaterial({ map: targuenorSpriteMap });

var targuenorSpritHoverMap = new TextureLoader().load(TarguenorPointHover);
var targuenorSpriteHoverMaterial = new SpriteMaterial({ map: targuenorSpritHoverMap });

var xerosSpriteMap = new TextureLoader().load(XerosPoint);
var xerosSpriteMaterial = new SpriteMaterial({ map: xerosSpriteMap });

var xerosSpritHoverMap = new TextureLoader().load(XerosPointHover);
var xerosSpriteHoverMaterial = new SpriteMaterial({ map: xerosSpritHoverMap });

var renzarySpriteMap = new TextureLoader().load(RenzaryPoint);
var renzarySpriteMaterial = new SpriteMaterial({ map: renzarySpriteMap });

var renzarySpritHoverMap = new TextureLoader().load(RenzaryPointHover);
var renzarySpriteHoverMaterial = new SpriteMaterial({ map: renzarySpritHoverMap });

var Poi = [];

// Modifier à partir d'ici !

// Continent

var EltagarContinent = new Sprite(eltagarSpriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
EltagarContinent.position.set(-14000, 1000, -7500);  // Modifier pour changer la position du POI
EltagarContinent.scale.set(2500, 2500, 2500);
EltagarContinent.img = [ImgLesTerresBriseesEltagar]; // Choix des images pour le POI
EltagarContinent.title = ["Les terres brisees d'Eltagar"]; // Choix des titres pour le POI
EltagarContinent.text = ["<p>Le jour où les Kerunir durent quitter Xerox, nos ancêtres se sont divisés en quatre grande expéditions</p><p>La première expédition, constitué principalement de chasseur, tenta de vaincre le grand Chereskan pour faire du volcan Rescan un lieu plus sûr pour notre peuple. Ce fut un massacre.</p><p>La seconde expédition s’installa sur les monts glacés de Targuenor, Mais le climat insoutenable du continent eut raison de bon nombre d’entre eux.</p><p>La troisième expédition immigra ici, dans le désert de Renzary. Il fut difficile pour nos ancêtres de s’acclimater à l’orage perpétuel. Mais ils finirent par s’adapter pour devenir le peuple que nous sommes aujourd’hui.</p><p>La quatrième qui fut la plus importante de toutes. La majorité du peuple des ancêtres voyagea plein d’espoir vers le continent d’Eltagar. C’est une terre fertile qui ressemble en plusieurs points à ce que j’ai découvert sur Xeros. Il avait l’espoir de retrouver la vie qu’ils furent obligés d’abandonner.</p><p>Ils emportèrent la majorité des biens et des savoirs de l’époque pour tenter de rebâtir un nouvel avenir pour les Kerunir. C’est pour cela que la fin tragique de la quatrième expédition marque la fin de l'ère des anciens</p>"]; // Choix des textes pour le POI (remplacer les retours à la ligne par \n)
EltagarContinent.icon = eltagarSpriteMaterial; // Ne changer que le nom
EltagarContinent.hoverIcon = eltagarSpriteHoverMaterial; // Ne changer que le nom
Poi.push(EltagarContinent); // Ne changer que le nom

var ReskanContinent = new Sprite(reskanSpriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
ReskanContinent.position.set(-12000, 1500, 5000);  // Modifier pour changer la position du POI
ReskanContinent.scale.set(2500, 2500, 2500);
ReskanContinent.img = [ImgLaDesolationDeChereskan]; // Choix des images pour le POI
ReskanContinent.title = ["La desolation de Chereskan"]; // Choix des titres pour le POI
ReskanContinent.text = ["<p>Personne n’est suffisamment fou pour s’aventurer sur le volcan Reskan. Cette terre volcanique grouille de souterrains dans lesquels prolifèrent toutes sortes de créatures.</p><p>Mais c’est l’imposant Chereskan qui règne en maitre sur les lieux.</p><p>On raconte qu’il fut un temps où la forêt recouvrait l’intégralité de l’île, montant jusqu’au sommet du Reskan jusque-là endormi. Une faune et une flore denses et variées s’épanouissaient sur les pentes fertiles du volcan.</p><p>Mais ces temps sont révolus. Aujourd’hui Chereskan et son engeance ont ravagé l’île et ont asservi toutes les autres espèces établies sur le territoire.</p>"]; // Choix des textes pour le POI (Mettre les paragraphe entre <p></p>)
ReskanContinent.icon = reskanSpriteMaterial; // Ne changer que le nom
ReskanContinent.hoverIcon = reskanSpriteHoverMaterial; // Ne changer que le nom
Poi.push(ReskanContinent); // Ne changer que le nom

var PoiLesMontsGlacesDeTarguenor = new Sprite(targuenorSpriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
PoiLesMontsGlacesDeTarguenor.position.set(8000, 2300, 6300);  // Modifier pour changer la position du POI
PoiLesMontsGlacesDeTarguenor.scale.set(2500, 2500, 2500);
PoiLesMontsGlacesDeTarguenor.img = [ImgLesMontsGlacesDeTarguenor]; // Choix des images pour le POI
PoiLesMontsGlacesDeTarguenor.title = ["Les Monts Glacés De Targuenor"]; // Choix des titres pour le POI
PoiLesMontsGlacesDeTarguenor.text = ["<p>La beauté de Targuenor est époustouflante.</p><p>Si seulement il n’y soufflait pas un vent sempiternel…</p>"]; // Choix des textes pour le POI (Mettre les paragraphe entre <p></p>)
PoiLesMontsGlacesDeTarguenor.icon = targuenorSpriteMaterial; // Ne changer que le nom
PoiLesMontsGlacesDeTarguenor.hoverIcon = targuenorSpriteHoverMaterial; // Ne changer que le nom
Poi.push(PoiLesMontsGlacesDeTarguenor); // Ne changer que le nom

var PoiLeDesertDeRenzary = new Sprite(renzarySpriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
PoiLeDesertDeRenzary.position.set(2300, 700, -8200);  // Modifier pour changer la position du POI
PoiLeDesertDeRenzary.scale.set(2500, 2500, 2500);
PoiLeDesertDeRenzary.img = [ImgLeDesertDeRenzary]; // Choix des images pour le POI
PoiLeDesertDeRenzary.title = ["Le Desert De Renzary"]; // Choix des titres pour le POI
PoiLeDesertDeRenzary.text = ["Renzary est le foyer de la civilisation Kerunir."]; // Choix des textes pour le POI (Mettre les paragraphe entre <p></p>)
PoiLeDesertDeRenzary.icon = renzarySpriteMaterial; // Ne changer que le nom
PoiLeDesertDeRenzary.hoverIcon = renzarySpriteHoverMaterial; // Ne changer que le nom
Poi.push(PoiLeDesertDeRenzary); // Ne changer que le nom

var PoiLesRuinesDeXeros = new Sprite(xerosSpriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
PoiLesRuinesDeXeros.position.set(16000, 1500, -1500);  // Modifier pour changer la position du POI
PoiLesRuinesDeXeros.scale.set(2500, 2500, 2500);
PoiLesRuinesDeXeros.img = [ImgLesRuinesDeXeros]; // Choix des images pour le POI
PoiLesRuinesDeXeros.title = ["Les Ruines De Xeros"]; // Choix des titres pour le POI
PoiLesRuinesDeXeros.text = ["<p>Tout le monde sait que Xéros fût le premier berceau de la civilisation Kerunir.</p><p>Comme l’on sait qu’ils durent un jour le quitter.</p><p>Nous avons tous entendu parler de l’histoire des quatre grandes expéditions qu’ont effectuées nos ancêtres à la recherche d’un nouveau foyer.</p><p>Ainsi que le triste sort de l’expédition d’Eltagar. Celle qui signa la fin de l’ère des ancêtres.</p><p>Mais il reste une question que nous nous posons tous.</p><p>Cette question que l’on a tous posé le jour où l’on nous raconta l’histoire des ancêtres.</p><p>Cette même question que l’on ose plus poser depuis que chacun de nous ait reçu pour seule réponse un long silence réprobateur.</p><p>Pourquoi nos ancêtres ont-ils quitté Xéros ?</p>"]; // Choix des textes pour le POI (Mettre les paragraphe entre <p></p>)
PoiLesRuinesDeXeros.icon = xerosSpriteMaterial; // Ne changer que le nom
PoiLesRuinesDeXeros.hoverIcon = xerosSpriteHoverMaterial; // Ne changer que le nom
Poi.push(PoiLesRuinesDeXeros); // Ne changer que le nom

// POI
 
var PoiDuSableEtDesFleurs = new Sprite(poiSpriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
PoiDuSableEtDesFleurs.position.set(0, 500, -8000);  // Modifier pour changer la position du POI
PoiDuSableEtDesFleurs.scale.set(700, 700, 700);
PoiDuSableEtDesFleurs.img = [ImgDuSableEtDesFleurs1, ImgDuSableEtDesFleurs2]; // Choix des images pour le POI
PoiDuSableEtDesFleurs.title = ["Du sable et des fleurs", "Recherche de terrain : Flore de renzary"]; // Choix des titres pour le POI
PoiDuSableEtDesFleurs.text = ["Il existe tellement de plantes différentes à Renzary ! Elles résistent toutes d’une manière ou d’une autre à l’orage perpétuel du désert, certaine accumulent l’énergie des éclairs pour s’en nourrir, d’autres s’en servent comme moyen de défense. ", "<p>Les fleurs teintent le paysage d’un camaïeu de bleu. On s’en sert comme décoration, lors de nos cérémonies ou bien comme ingrédient dans nos recettes. Je vous conseille d’ailleurs la soupe de Rajédra bleus !</p> <p>Les Kerunir utilisent aussi les fleurs du marais pour confectionner différents tissus végétaux. De par leur nature, ces tissus permettant d’absorber la foudre et protègent ainsi les voyageurs qui traversent le désert.</p>"]; // Choix des textes pour le POI (remplacer les retours à la ligne par \n)
PoiDuSableEtDesFleurs.icon = poiSpriteMaterial; // Ne changer que le nom
PoiDuSableEtDesFleurs.hoverIcon = poiSpriteHoverMaterial; // Ne changer que le nom
Poi.push(PoiDuSableEtDesFleurs); // Ne changer que le nom

var PoiRivglace = new Sprite(poiSpriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
PoiRivglace.position.set(11700, 500, 3200);  // Modifier pour changer la position du POI
PoiRivglace.scale.set(700, 700, 700);
PoiRivglace.img = [ImgRivglace]; // Choix des images pour le POI
PoiRivglace.title = ["Rivglace"]; // Choix des titres pour le POI
PoiRivglace.text = ["Le vent endémique qui s’engouffre dans la forêt pétrifiée de Riveglace façonne le paysage en des couloirs de givre, que les aurores boréales teintent de mille couleurs."]; // Choix des textes pour le POI (Mettre les paragraphe entre <p></p>)
PoiRivglace.icon = poiSpriteMaterial; // Ne changer que le nom
PoiRivglace.hoverIcon = poiSpriteHoverMaterial; // Ne changer que le nom
Poi.push(PoiRivglace); // Ne changer que le nom

var PoiSkanraFoudroyant = new Sprite(poiSpriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
PoiSkanraFoudroyant.position.set(2000, 500, -6000);  // Modifier pour changer la position du POI
PoiSkanraFoudroyant.scale.set(700, 700, 700);
PoiSkanraFoudroyant.img = [ImgSkanraFoudroyant]; // Choix des images pour le POI
PoiSkanraFoudroyant.title = ["Skanras Foudroyantes"]; // Choix des titres pour le POI
PoiSkanraFoudroyant.text = ["<p>Lors des orages, on peut voir beaucoup de Skanras foudroyantes.</p><p>Ces insectes captent l’électricité des éclairs et s’en servent pour faire des bonds de plusieurs mètres. La trainée lumineuse qu’elles émettent quand elles sautent entre les différents champs de fleurs est fascinante à regarder.</p><p>Elles amortissent leur chute grâce à une membrane collée à l’intérieur de la carapace. On peut savoir quand un orage arrive si on observe les Skanras.</p><p>Quand j’étais enfant, on se lançait des paris pour savoir qui en attrapera un. Bien sûr, ça finissait toujours avec quelques blessures !</p>"]; // Choix des textes pour le POI (Mettre les paragraphe entre <p></p>)
PoiSkanraFoudroyant.icon = poiSpriteMaterial; // Ne changer que le nom
PoiSkanraFoudroyant.hoverIcon = poiSpriteHoverMaterial; // Ne changer que le nom
Poi.push(PoiSkanraFoudroyant); // Ne changer que le nom

var PoiAledarion = new Sprite(poiSpriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
PoiAledarion.position.set(13000, 500, 8500);  // Modifier pour changer la position du POI
PoiAledarion.scale.set(700, 700, 700);
PoiAledarion.img = [ImgAledarion]; // Choix des images pour le POI
PoiAledarion.title = ["Aledarion"]; // Choix des titres pour le POI
PoiAledarion.text = ["WIP"]; // Choix des textes pour le POI (Mettre les paragraphe entre <p></p>)
PoiAledarion.icon = poiSpriteMaterial; // Ne changer que le nom
PoiAledarion.hoverIcon = poiSpriteHoverMaterial; // Ne changer que le nom
Poi.push(PoiAledarion); // Ne changer que le nom

var PoiFeryan = new Sprite(poiSpriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
PoiFeryan.position.set(5300, 500, -8000);  // Modifier pour changer la position du POI
PoiFeryan.scale.set(700, 700, 700);
PoiFeryan.img = [ImgFeryan]; // Choix des images pour le POI
PoiFeryan.title = ["Feryan"]; // Choix des titres pour le POI
PoiFeryan.text = ["WIP"]; // Choix des textes pour le POI (Mettre les paragraphe entre <p></p>)
PoiFeryan.icon = poiSpriteMaterial; // Ne changer que le nom
PoiFeryan.hoverIcon = poiSpriteHoverMaterial; // Ne changer que le nom
Poi.push(PoiFeryan); // Ne changer que le nom

var PoiKopaek = new Sprite(poiSpriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
PoiKopaek.position.set(16500, 1000, 500);  // Modifier pour changer la position du POI
PoiKopaek.scale.set(700, 700, 700);
PoiKopaek.img = [ImgKopaek]; // Choix des images pour le POI
PoiKopaek.title = ["Kopaek"]; // Choix des titres pour le POI
PoiKopaek.text = ["WIP"]; // Choix des textes pour le POI (Mettre les paragraphe entre <p></p>)
PoiKopaek.icon = poiSpriteMaterial; // Ne changer que le nom
PoiKopaek.hoverIcon = poiSpriteHoverMaterial; // Ne changer que le nom
Poi.push(PoiKopaek); // Ne changer que le nom

var PoiOrolux = new Sprite(poiSpriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
PoiOrolux.position.set(11000, 500, 4500);  // Modifier pour changer la position du POI
PoiOrolux.scale.set(700, 700, 700);
PoiOrolux.img = [ImgOrolux1, ImgOrolux2]; // Choix des images pour le POI
PoiOrolux.title = ["Orolux", "Recherche de terrain : Orolux"]; // Choix des titres pour le POI
PoiOrolux.text = ["<p>Les Oroluxs sont de belles créatures. Ces oiseaux chassent dans les grandes stalactites, elles arrivent à planer entre silencieusement.</p> <p>J’ai eu la chance de les voir planer dans la glace, leurs ombres filent et se perdent dans ce labyrinthe gelé.</p><p>Les locaux ont appris à capturer ces oiseaux sans les blesser à l’aide de grands filets. Ils les couvrent de bijoux en or et en bronze pour les empêcher de s’envoler, ensuite ils vivent sur des perchoirs dans des temples ou les maisons des personnes les plus influentes.</p>", "Les gens leur font des offrandes de nourritures et les caresses pour avoir de la chance. Leur chant est magnifique quand il résonne dans les grandes salles."]; // Choix des textes pour le POI (remplacer les retours à la ligne par \n)
PoiOrolux.icon = poiSpriteMaterial; // Ne changer que le nom
PoiOrolux.hoverIcon = poiSpriteHoverMaterial; // Ne changer que le nom
Poi.push(PoiOrolux); // Ne changer que le nom

var PoiRamuron = new Sprite(poiSpriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
PoiRamuron.position.set(12500, 500, -2600);  // Modifier pour changer la position du POI
PoiRamuron.scale.set(700, 700, 700);
PoiRamuron.img = [ImgRamuron]; // Choix des images pour le POI
PoiRamuron.title = ["Ramuron"]; // Choix des titres pour le POI
PoiRamuron.text = ["WIP"]; // Choix des textes pour le POI (Mettre les paragraphe entre <p></p>)
PoiRamuron.icon = poiSpriteMaterial; // Ne changer que le nom
PoiRamuron.hoverIcon = poiSpriteHoverMaterial; // Ne changer que le nom
Poi.push(PoiRamuron); // Ne changer que le nom

var PoiShalakMham = new Sprite(poiSpriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
PoiShalakMham.position.set(2300, 500, -10000);  // Modifier pour changer la position du POI
PoiShalakMham.scale.set(700, 700, 700);
PoiShalakMham.img = [ImgShalakMham]; // Choix des images pour le POI
PoiShalakMham.title = ["ShalakMham"]; // Choix des titres pour le POI
PoiShalakMham.text = ["WIP"]; // Choix des textes pour le POI (Mettre les paragraphe entre <p></p>)
PoiShalakMham.icon = poiSpriteMaterial; // Ne changer que le nom
PoiShalakMham.hoverIcon = poiSpriteHoverMaterial; // Ne changer que le nom
Poi.push(PoiShalakMham); // Ne changer que le nom

var PoiZerufon = new Sprite(poiSpriteMaterial); // Choix du Nom du POI (Il faut le changer dans tout le bloc ensuite)
PoiZerufon.position.set(5600, 500, -5200);  // Modifier pour changer la position du POI
PoiZerufon.scale.set(700, 700, 700);
PoiZerufon.img = [ImgZerufon]; // Choix des images pour le POI
PoiZerufon.title = ["Zerufon"]; // Choix des titres pour le POI
PoiZerufon.text = ["WIP"]; // Choix des textes pour le POI (Mettre les paragraphe entre <p></p>)
PoiZerufon.icon = poiSpriteMaterial; // Ne changer que le nom
PoiZerufon.hoverIcon = poiSpriteHoverMaterial; // Ne changer que le nom
Poi.push(PoiZerufon); // Ne changer que le nom

// Ne plus modifier a partir d'ici !!!

Poi.forEach((element) => {
    element.hover = () => element.material = element.hoverIcon;
    element.unhover = () => element.material = element.icon;
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