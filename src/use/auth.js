import Keycloak from "keycloak-js";
import {useUserStore} from "@/stores/user";
import {storeToRefs} from "pinia";
import {authService} from "@/api/sevices/authService";
import {identityRole} from "@/helpers/roleHelper";

export function useAuth() {
    const store = useUserStore();
    const AUTH_URL = import.meta.env.VITE_APP_AUTH_URL;
    const {fetchUserData} = authService()

    const keycloakOptions = {
        url: AUTH_URL,
        realm: 'dripId',
        clientId: 'pbpkce_client',
    }
    const initOptions = {
        onLoad: 'login-required',
        flow: 'standard',
        pkceMethod: 'S256',
        checkLoginIframe: false,
    }

    let keycloak = null;

    const logIn = async () => {
        if (keycloak === null) {
            keycloak = new Keycloak(keycloakOptions)
            await keycloak
                .init(initOptions)
                .then(() => {
                    store.setToken(keycloak.token)
                    fetchUserData()
                        .then(async ({data}) => {
                            store.setAccountInfo(data.accountInfo);
                            store.setAddresses(data.saveAddresses);
                            store.serUserId(data.id);
                            store.setUserRole(identityRole(keycloak));
                        })
                });
            return keycloak
        } else {
            store.setToken(keycloak.token)
            await fetchUserData()
                .then(async ({data}) => {
                    store.setAccountInfo(data.accountInfo);
                    store.setAddresses(data.saveAddresses);
                    store.serUserId(data.id);
                    store.setUserRole(identityRole(keycloak));
                })
            return keycloak
        }
    }



    const logOut = async () => {
        await keycloak
            .logout({
                redirectUri : `http://${window.location.hostname}:${window.location.port}/`
            })
    }

    const {name, surname} = storeToRefs(store);

    return {
        logIn,
        logOut,
        name,
        surname,
        keycloak
    }
}