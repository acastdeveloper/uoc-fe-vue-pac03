const getCacheURL = () => {
    return localStorage(cacheURL);
};

const getURL = () => {
    return window.location.href;
};

const putStorageURL = (u) => {
    localStorage.setItem(cacheURL, u);
};

export const watcherURL = () => {
    const watcher = () => {
        setInterval(() => {
        }, 300);
    };
};
