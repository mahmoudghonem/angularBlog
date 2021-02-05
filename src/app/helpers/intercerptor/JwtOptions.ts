
export function jwtOptionsFactory() {
    return {
        tokenGetter: () => {
            return localStorage.getItem('token');
        },
        authScheme: '',
        skipWhenExpired: true,
        allowedDomains: ['mydevsblog.herokuapp.com'],
        disallowedRoutes: [],
    }
}