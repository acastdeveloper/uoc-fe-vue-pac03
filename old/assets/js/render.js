import {
    getCache
} from "./cache.js";

let laCard = [];
const $cards = document.querySelector("#cards");
const $template = document.querySelector("#poke-card").content;
const $fragment = document.createDocumentFragment();

export const renderCard = async (o) => {
    let {
        id,
        nom,
        frontal,
        darrera,
        tipus,
        atac,
        defensa
    } = o;
    let tipusL = tipus.length;
    let tipusM = [];

    for (let i = 0; i < tipusL; i++) {
        tipusM.push(tipus[i].type.name);
    }

    if (frontal != null) {
        $template.querySelector(".front>img").setAttribute("src", frontal);
    } else {
        $template.querySelector(".front>img").setAttribute("src", "./assets/img/error404.png");
    }

    if (darrera != null) {
        $template.querySelector(".darrera>img").setAttribute("src", darrera);
    } else {
        $template.querySelector(".darrera>img").setAttribute("src", "./assets/img/error404.png");
    }

    $template.querySelector(".card").setAttribute("data-id", "#" + id);
    $template.querySelector(".nom").textContent = nom;
    $template.querySelector(".card img").setAttribute("alt", nom);
    $template.querySelector(".tipus").textContent = "Tipus: " + tipusM.toString();
    $template.querySelector(".atac").textContent = "Atac: " + atac;
    $template.querySelector(".defensa").textContent = "Defensa: " + defensa;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
    $cards.appendChild($fragment);

    // console.log("$clone: ", id, nom, frontal, darrera, tipusM, atac, defensa);
};

const hideDarrera = (i) => {
    document.querySelectorAll(".darrera")[i].style.display = "none";
};

const hideOtherCards = (dataid) => {
    let others = [...laCard];
    others.filter(e => e.getAttribute("data-id") != dataid);
    for (let i = 0; i < others.length; i++) {
        const element = others[i];
        // console.log(element.getAttribute("data-id"));
        if (element.getAttribute("data-id") != dataid) {
            element.style.display = "none";
        }
    }
}

const cardClick = (i) => {
    let baseURL = window.location.href.split("#")[0];
    laCard = document.querySelectorAll(".card");
    laCard[i].addEventListener("click", (e) => {
        let actual = e.currentTarget;
        // console.log(baseURL + actual.getAttribute("data-id"));
        window.location.href = baseURL + actual.getAttribute("data-id");
        hideOtherCards(actual.getAttribute("data-id"));
        actual.querySelector(".darrera").style.display = "block";
        actual.querySelector("#tancar").addEventListener("click", () => {
            window.location.href = baseURL;
        });
    });
}

export const render = () => {
    let longPokesCache = getCache().length;
    for (let i = 0; i < longPokesCache; i++) {
        renderCard(getCache()[i]);
        hideDarrera(i);
        cardClick(i);
    }
};

export const deletRender = () => {
    document.querySelector("#cards").innerHTML = "";
}
