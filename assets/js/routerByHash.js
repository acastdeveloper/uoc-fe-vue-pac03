export const getHash = () => {
    return window.location.hash;
};

const senseHash = () => {
    return getHash().slice(1);
}

const putHash = () => {
    localStorage.setItem('hash', noHash())
};

const clearHash = () => {
    localStorage.removeItem('hash');
}

// detectHash = () => {
//     const oldHash, newHash;
//     if (localStorage.getItem('hash')) {
//         oldHash = senseHash();
//     } else { }
// };

export const router = () => {
    // console.log("router: " + senseHash());
    return senseHash();
}
