import { WebPlugin } from '@capacitor/core';

import type { YemCapacitorFacebookPlugin } from './definitions';

export class YemCapacitorFacebookWeb extends WebPlugin implements YemCapacitorFacebookPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
