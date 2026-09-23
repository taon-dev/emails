//#region imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Taon, TaonBaseAngularService } from 'taon/src';

import { TaonEmailContactProvider } from './taon-email-contact.provider';
//#endregion

@Injectable()
export class TaonEmailContactConfigService extends TaonBaseAngularService {
  private taonEmailContactProvider = this.injectProvider(TaonEmailContactProvider);

  get isEnableOption() {
    return this.taonEmailContactProvider.enabledTaonEmailContactOption;
  }
}