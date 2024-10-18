import type { PageLoad } from './$types';
import * as Types from '$lib/types';
import { dev } from '$app/environment';
import { browser } from '$app/environment';

if (dev) {
    import.meta.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
}
export const load = (async ({ fetch }) => {

    
    // Define variables to hold data, with fallback values
    let news: Types.Post[] | null = null;
    let token: Types.WoWToken | null = null;
    let affixes: Types.Affixes | null = null;
    if (browser)
    try {
        let newsEndpoint = 'https://whatchoresapi.azurewebsites.net/api/v1/general/wowNews'
        let tokenEndpoint = 'https://whatchoresapi.azurewebsites.net/api/v1/general/wowtoken'
        if (dev) {
            console.log('Dev Environment Active')
            newsEndpoint = 'https://localhost:7031/api/v1/general/wowNews';
            tokenEndpoint = 'https://localhost:7031/api/v1/general/wowtoken';
        }
        // Fetch data concurrently
        const [newsResponse, tokenResponse, affixResponse] = await Promise.all([
            fetch(`${newsEndpoint}?limit=10`),
            fetch(`${tokenEndpoint}`),
            fetch('https://raider.io/api/v1/mythic-plus/affixes?region=us')
        ]);

        // Process news response
        if (newsResponse.ok) {
            news = await newsResponse.json();
        } else {
            console.error(`Failed to fetch news: ${newsResponse.status}`);
        }

        // Process token response
        if (tokenResponse.ok) {
            token = await tokenResponse.json();
        } else {
            console.error(`Failed to fetch WoW token: ${tokenResponse.status}`);
        }

        // Process affixes response
        if (affixResponse.ok) {
            affixes = await affixResponse.json();
        } else {
            console.error(`Failed to fetch affixes: ${affixResponse.status}`);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        // Log the error but continue execution
    }

    // Return the fetched data, even if some are null or empty
    return {
        news,
        token,
        affixes
    };
}) satisfies PageLoad;
