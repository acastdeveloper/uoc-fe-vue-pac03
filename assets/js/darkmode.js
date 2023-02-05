if (localStorage.getItem("theme") == "dark") {
    document.body.setAttribute("data-theme", "dark")
}


const canviThem = document.querySelector("#switcher");
canviThem.addEventListener("click", () => {

    if (document.body.hasAttribute("data-theme")) {
        document.body.removeAttribute("data-theme");
        localStorage.setItem("theme", null);

    } else {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    }

    document.querySelector("#ball").classList.toggle("dark");
});
