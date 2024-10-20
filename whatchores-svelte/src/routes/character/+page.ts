import type { PageLoad } from './$types';
import { realms, type Realm } from '$lib/realms';
export const load = (async () => {
    try {
        const realmList: Realm[] = realms;
        return {
            realmList
        };
    } catch(exception) {
        throw new Error(`Couldn't fetching realm data: ${exception}`);
    }
   
    
}) satisfies PageLoad;