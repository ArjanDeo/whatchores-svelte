import type { LayoutLoad } from './$types';
import { dev } from '$app/environment';
if (dev) {
    import.meta.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
}
export const load = (async () => {
    return {};
}) satisfies LayoutLoad;