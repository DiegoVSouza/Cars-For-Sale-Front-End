export const isAuthenticated = () => {
    return localStorage.getItem('@token') !== null ? true : false
};
