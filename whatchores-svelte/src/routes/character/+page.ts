import type { PageLoad } from './$types';
import { dev } from '$app/environment';
import * as Types from '$lib/types'
export const load = (async ({fetch}) => {
    let realmDataEndpoint = 'https://whatchoresapi.azurewebsites.net/api/v1/general/realms';
    if (dev) {
        console.log('Dev Environment Active')
        realmDataEndpoint = 'https://localhost:7031/api/v1/general/realms'
    }
    let realmData: Types.Realms
    try {
        const realmDataResponse = await fetch(realmDataEndpoint);
        if (!realmDataResponse.ok) {
            console.error(`Error fetching realm data: ${realmDataResponse.statusText}`);
        }
        realmData =  await realmDataResponse.json();
        return {
            realmData
        };
    } catch(exception) {
        throw new Error(`Couldn't fetching realm data: ${exception}`);
    }
   
    
}) satisfies PageLoad;