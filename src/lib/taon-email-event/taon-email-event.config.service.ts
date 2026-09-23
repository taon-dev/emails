//#region imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Taon, TaonBaseAngularService } from 'taon/src';

import { TaonEmailEventProvider } from './taon-email-event.provider';
//#endregion

@Injectable()
export class TaonEmailEventConfigService extends TaonBaseAngularService {
  private taonEmailEventProvider = this.injectProvider(TaonEmailEventProvider);

  get isEnableOption() {
    return this.taonEmailEventProvider.enabledTaonEmailEventOption;
  }
}