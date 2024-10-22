import Keycloak from 'keycloak-js'

const AUTH_URL = import.meta.env.VITE_APP_AUTH_URL

export const keycloak = new Keycloak({
	url: AUTH_URL,
	realm: 'dripId',
	clientId: 'pbpkce_client',
})

export const login = () => keycloak.login()
export const logout = () => keycloak.logout()
