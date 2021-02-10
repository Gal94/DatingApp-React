// returns the last part of the url
export const getEndOfPath = () => {
    return window.location.pathname.split('/').pop();
};
