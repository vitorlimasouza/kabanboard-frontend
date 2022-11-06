export const BEARER_TOKEN_KEY = "@bearer-Token";

export const isAuthenticated = () => localStorage.getItem(BEARER_TOKEN_KEY) !== null;

export const getBearerToken = () => localStorage.getItem(BEARER_TOKEN_KEY);

export const setBearerToken = (token: string) => {
    localStorage.setItem(BEARER_TOKEN_KEY, token);
};

export const removeBearerToken = () => {
    localStorage.removeItem(BEARER_TOKEN_KEY);
};