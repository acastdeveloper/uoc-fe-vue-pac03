export const randM = (rang) => {
    const set1 = new Set();
    const total = 10;
    do {
        set1.add(parseInt(rang * Math.random()));
    } while (set1.size < total)

    return [...set1];
}

const main = () => {
    console.log("main des de random.js ...");
}

const auto = (() => {
    main();
})();
