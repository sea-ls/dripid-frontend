export function identityRole(keycloak) {
    if (keycloak) {
       return keycloak.tokenParsed.realm_access.roles.find(role => role === 'ADMIN') === undefined ? 'USER' : 'ADMIN';
    }
}