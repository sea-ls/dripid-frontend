import { authService } from '@/api/services/authService'
import { identityRole } from '@/helpers/roleHelper'
import { useUserStore } from '@/stores/user'
import Keycloak from 'keycloak-js'

const AUTH_URL = import.meta.env.VITE_APP_AUTH_URL

const keycloak = new Keycloak({
	url: AUTH_URL,
	realm: 'dripId',
	clientId: 'pbpkce_client',
})

export const initKeycloak = async () => {
	const store = useUserStore()
	const { fetchUserData } = authService()
	try {
		const authenticated = await keycloak.init({
			onLoad: 'check-sso',
			silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
			flow: 'standard',
			pkceMethod: 'S256',
			checkLoginIframe: false,
		})
		if (authenticated) {
			store.setToken(keycloak.token)
			fetchUserData().then(async ({ data }) => {
				store.setAccountInfo(data.accountInfo)
				store.setAddresses(data.saveAddresses)
				store.serUserId(data.id)
				store.setUserRole(identityRole(keycloak))
			})
		}
	} catch (error) {
		console.error('Keycloak initialization failed', error)
	}
}

export const login = () => keycloak.login()
export const logout = () => keycloak.logout()
