import type { PageLoad } from './$types';
import * as Types from '$lib/types'
import { dev } from '$app/environment';
if (dev) {
    import.meta.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
}

export const load = (async ({fetch, params }) => {
    try {
        let charDataEndpoint = "https://whatchoresapi.azurewebsites.net/api/v1/general/charData"
        let charRaidDataEndpoint = "https://whatchoresapi.azurewebsites.net/api/v1/general/charRaids"

        if (dev) {
            console.log('Dev Environment Active')

            charDataEndpoint = "https://localhost:7031/api/v1/general/charData"
            charRaidDataEndpoint = "https://localhost:7031/api/v1/general/charRaids"
        }
        const charDataResponse = await fetch(`${charDataEndpoint}?realm=${params.realm}&name=${params.name}&region=us`);        
        const charData: Types.CharacterData = await charDataResponse.json();

        const charRaidDataResponse = await fetch(`${charRaidDataEndpoint}?name=${params.name}&realm=${params.realm}&region=us`);
        const charRaidData: Types.RaidData = await charRaidDataResponse.json();
        
        return {
            charData,
            charRaidData
        };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
        throw new Error('Character not found.');
    }
}) satisfies PageLoad;