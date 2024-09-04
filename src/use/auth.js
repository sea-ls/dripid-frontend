import Keycloak from "keycloak-js";
import {useUserStore} from "@/stores/user";
import {storeToRefs} from "pinia";
import {useRouter} from "vue-router";

export function useAuth() {
    const store = useUserStore();
    const router = useRouter();

    const AUTH_URL = import.meta.env.VITE_APP_AUTH_URL;

    const keycloakOptions = {
        url: AUTH_URL,
        realm: 'dripId',
        clientId: 'pbpkce_client',
    }
    const initOptions = {
        flow: 'standard',
        pkceMethod: 'S256',
        checkLoginIframe: false,
    }

    const keycloak = new Keycloak(keycloakOptions)

    console.log(keycloak)

    const logIn = async () => {
        if (!keycloak.authenticated) {
            await keycloak
                .init(initOptions)
                .then(() => {
                    console.log('init')
                })
                .catch(e => {
                    console.error(e)
                })

        } else {
            await keycloak.login().then(() => console.log('login'))
        }


    }

    const logOut = async () => {
        await keycloak
            .init({
                onLoad: 'login-required',
                flow: 'standard',
                pkceMethod: 'S256',
                checkLoginIframe: false,
            })
            .then((auth) => {
                console.log(auth, keycloak.token)
                localStorage.setItem('token', keycloak.token)
            })
            .catch(e => {
                console.error(e)
            })

    }

    const {name, surname} = storeToRefs(store);

    return {
        logIn,
        name,
        surname
    }
}