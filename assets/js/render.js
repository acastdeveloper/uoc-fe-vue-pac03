import {
    getLocalPokes
} from "./db.js";

let lesCards = []; //matriu d'elements html la-card

const $cards = document.querySelector("les-cards");
const $template = document.querySelector("#cardtemplate").content;
const $fragment = document.createDocumentFragment();

const renderCard = (o) => { //renderització de cada carta

    // INICIALITZACIÓ DE VARIABLES
    let { //inicialització de variables per destructuració de l'objecte "o" que li passem
        id,
        nom,
        frontal,
        darrera,
        tipus,
        atac,
        defensa
    } = o;

    let tipusL = tipus.length; //nº de tipus del poke
    let tipusM = []; //submatriu de tipus del poke

    for (let i = 0; i < tipusL; i++) {
        tipusM.push(tipus[i].type.name);
    } // generació de la submatriu de tipus del poke

    // ASSIGNACIÓ D'ATRIBUTS I VALORS ALS ELEMENTS HTML DE LA PLANTILLA

    //Imatges
    if (frontal != null) {
        $template.querySelector("la-front>img").setAttribute("src", frontal);
    } else {
        $template.querySelector("la-front>img").setAttribute("src", "./assets/img/error404.png");
    }

    if (darrera != null) {
        $template.querySelector("la-back>img").setAttribute("src", darrera);
    } else {
        $template.querySelector("la-back>img").setAttribute("src", "./assets/img/error404.png");
    }

    /* Identificador de la carta amb atribut personalitzat "id" d'element personalitzat d'HTML. "custom element" */
    $template.querySelector("la-card").setAttribute("id", "#" + id);

    // Assignació de valor de "nom" com a text a element .nom
    $template.querySelector(".nom").textContent = nom;

    // assignació de valor de "nom" com atribut "alt" de la primera imatge
    $template.querySelector("img").setAttribute("alt", nom);

    // assignació de la cadena de "tipus" a element .tipus
    $template.querySelector(".tipus").textContent = "Tipus: " + tipusM.toString();

    // assignació de valor d'"atac" a element .atac
    $template.querySelector(".atac").textContent = "Atac: " + atac;

    //assignació de valor de "defensa" a element .defensa
    $template.querySelector(".defensa").textContent = "Defensa: " + defensa;

    // Clonem la plantilla per cada carta
    let $clone = document.importNode($template, true);

    // Anidem lo clonat al "fragment"
    $fragment.appendChild($clone);

    // A l'espai $cards, és a dir, dins les-cards, anidem el fragment anterior
    $cards.appendChild($fragment);
};

const hideLaBack = (i) => {
    document.querySelectorAll("la-back")[i].style.display = "none";
};

const hideOthers = (ide) => {
    let others = [...lesCards];
    for (let i = 0; i < others.length; i++) {
        if (others[i].getAttribute("id") != ide) {
            others[i].style.display = "none";
        }
    }
};

const showAll = () => {
    for (let i = 0; i < lesCards.length; i++) {
        lesCards[i].style.display = "flex";
        hideLaBack(i);
    }
};

export const deletRender = () => {
    document.querySelector("les-cards").innerHTML = "";
}

export const render = (m) => {
    for (let i = 0; i < m.length; i++) {
        renderCard(m[i]);
        cardClick(i);
    }
};

// INTERACTIVITAT
const cardClick = (i) => {
    let baseURL = window.location.href.split("#")[0];
    lesCards = document.querySelectorAll("la-card");
    lesCards[i].addEventListener("click", (e) => {
        let actual = e.currentTarget;
        window.location.href = baseURL + actual.getAttribute("id");
        hideOthers(actual.getAttribute("id"));
        actual.querySelector("la-back").style.display = "block";
        actual.querySelector("img").style.width = "14rem";
        actual.style.transition = "none";
        actual.querySelector("#tancar").addEventListener("click", () => {
            window.location.href = baseURL;
        });
    });
}

const main = () => {
    console.log("main des de render.js ...", getLocalPokes());
}

const auto = (() => {
    main();
})();
