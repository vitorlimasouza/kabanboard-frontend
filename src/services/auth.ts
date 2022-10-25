export const BEARER_TOKEN_KEY = "@bearer-Token";
export const LOGIN_EMAIL_KEY = "@login-Email";
export const LOGIN_PASSWORD_KEY = "@login-Password";

export const isAuthenticated = () => localStorage.getItem(BEARER_TOKEN_KEY) !== null;

export const getBearerToken = () => localStorage.getItem(BEARER_TOKEN_KEY);

export const setBearerToken = (token: string) => {
    localStorage.setItem(BEARER_TOKEN_KEY, token);
};

export const removeBearerToken = () => {
    localStorage.removeItem(BEARER_TOKEN_KEY);
};

export const getLoginEmail = () => localStorage.getItem(LOGIN_EMAIL_KEY);

export const setLoginEmail = (token: string) => {
    localStorage.setItem(LOGIN_EMAIL_KEY, token);
};

export const removeLoginEmail = () => {
    localStorage.removeItem(LOGIN_EMAIL_KEY);
};

export const getLoginPassword = () => localStorage.getItem(LOGIN_PASSWORD_KEY);

export const setLoginPassword = (token: string) => {
    localStorage.setItem(LOGIN_PASSWORD_KEY, token);
};

export const removeLoginPassword = () => {
    localStorage.removeItem(LOGIN_PASSWORD_KEY);
};