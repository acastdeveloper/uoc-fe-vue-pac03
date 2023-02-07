export const detectLocalPokes = () => {
    if (getLocalPokes() == null) { return false; } else { return true; }
};

export const getLocalPokes = () => {
    let local = JSON.parse(window.localStorage.getItem("localPokes"));
    return local;
};

export const setLocalPokes = (obj) => {
    window.localStorage.setItem("localPokes", JSON.stringify(obj));
};

export const clearPokes = () => {
    localStorage.removeItem("localPokes");
};

const main = async () => {
    console.log("main des de db.js...");
    // console.log(await JSON.parse(getLocalPokes()));
};

const auto = (() => {
    main();
})();
