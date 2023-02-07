const switcher = document.querySelector("#switcher");
const ball = document.querySelector("#ball");

const theme = () => {
    let darktheme = window.localStorage.getItem("darktheme");
    // console.log("Des del theme: ", darktheme);

    if (darktheme == "dark") {
        document.body.setAttribute("data-theme", "dark");
        switcher.checked = true;
        ball.classList.add("dark");
    } else {
        document.body.removeAttribute("data-theme");
        switcher.checked = false;
        ball.classList.remove("dark");
    }
};

const auto = (() => {
    theme();
})();

// INTERACTIVITAT
switcher.addEventListener('change', () => {
    let onOf = switcher.checked;
    if (onOf) {
        ball.classList.add("dark");
        window.localStorage.setItem("darktheme", "dark");
    }
    else {
        ball.classList.remove("dark");
        window.localStorage.removeItem("darktheme");
    }

    theme();
});
