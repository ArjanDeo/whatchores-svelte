import type { PageLoad } from './$types';
import { dev } from '$app/environment';
import * as Types from '$lib/types'
if (dev) {
    import.meta.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
}

export const load = (async ({fetch}) => {
    let realmDataEndpoint = 'https://whatchoresapi.azurewebsites.net/api/v1/general/realms';
    if (dev) {
        console.log('Dev Environment Active')
        realmDataEndpoint = 'https://localhost:7031/api/v1/general/realms'
    }
    const realmDataResponse = await fetch(realmDataEndpoint);
    if (!realmDataResponse.ok) {
        throw new Error(`Error fetching realm data: ${realmDataResponse.statusText}`);
    }
    const realmData: Types.Realms = await realmDataResponse.json();
    return {
        realmData
    };
}) satisfies PageLoad;