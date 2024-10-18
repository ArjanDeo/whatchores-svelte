import type { PageLoad } from './$types';
import * as Types from '$lib/types'
import { dev } from '$app/environment';

export const load = (async ({fetch, params }) => {
   // try {
        let charDataEndpoint = "https://whatchoresapi.azurewebsites.net/api/v1/general/character"

        if (dev) {
            console.log('Dev Environment Active')
            charDataEndpoint = "/api/v1/general/character"
        }
        const charDataResponse = await fetch(`${charDataEndpoint}?realm=${params.realm}&name=${params.name}&region=us`);
        
        if (!charDataResponse.ok) {
            throw new Error('Error fetching character. ' + charDataResponse.status + ' ' + charDataResponse.statusText)
        }
        const character: Types.CharacterData = await charDataResponse.json();

        return {
            character
        };
   // } catch (exception: unknown) {
    //    throw new Error('Character not found. ' + exception);
    /////}
}) satisfies PageLoad;