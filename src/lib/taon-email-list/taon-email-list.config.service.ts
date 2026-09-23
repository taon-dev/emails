//#region imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Taon, TaonBaseAngularService } from 'taon/src';

import { TaonEmailListProvider } from './taon-email-list.provider';
//#endregion

@Injectable()
export class TaonEmailListConfigService extends TaonBaseAngularService {
  private taonEmailListProvider = this.injectProvider(TaonEmailListProvider);

  get isEnableOption() {
    return this.taonEmailListProvider.enabledTaonEmailListOption;
  }
}