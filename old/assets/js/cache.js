export const detectCache = () => {
    if (getCache() == null) { return false; } else { return true; }
};

export const clearCache = () => {
    localStorage.removeItem('cachePokes');
};

export const getCache = () => {
    return JSON.parse(localStorage.getItem('cachePokes'));
};

export const putCache = (v) => {
    localStorage.setItem(JSON.stringify('cachePokes'), v);
};
