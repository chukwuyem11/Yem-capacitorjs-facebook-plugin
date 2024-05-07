import { registerPlugin } from '@capacitor/core';

import type { YemCapacitorFacebookPlugin } from './definitions';

const YemCapacitorFacebook = registerPlugin<YemCapacitorFacebookPlugin>('YemCapacitorFacebook', {
  web: () => import('./web').then(m => new m.YemCapacitorFacebookWeb()),
});

export * from './definitions';
export { YemCapacitorFacebook };
