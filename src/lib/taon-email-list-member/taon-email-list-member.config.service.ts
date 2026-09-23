//#region imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Taon, TaonBaseAngularService } from 'taon/src';

import { TaonEmailListMemberProvider } from './taon-email-list-member.provider';
//#endregion

@Injectable()
export class TaonEmailListMemberConfigService extends TaonBaseAngularService {
  private taonEmailListMemberProvider = this.injectProvider(TaonEmailListMemberProvider);

  get isEnableOption() {
    return this.taonEmailListMemberProvider.enabledTaonEmailListMemberOption;
  }
}