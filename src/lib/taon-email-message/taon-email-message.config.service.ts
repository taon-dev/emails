//#region imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Taon, TaonBaseAngularService } from 'taon/src';

import { TaonEmailMessageProvider } from './taon-email-message.provider';
//#endregion

@Injectable()
export class TaonEmailMessageConfigService extends TaonBaseAngularService {
  private taonEmailMessageProvider = this.inject(TaonEmailMessageProvider);

  get isEnableOption() {
    return this.taonEmailMessageProvider.enabledTaonEmailMessageOption;
  }
}
