//#region imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Taon, TaonBaseAngularService } from 'taon/src';

import { TaonEmailDeliveryAttemptProvider } from './taon-email-delivery-attempt.provider';
//#endregion

@Injectable()
export class TaonEmailDeliveryAttemptConfigService extends TaonBaseAngularService {
  private taonEmailDeliveryAttemptProvider = this.injectProvider(TaonEmailDeliveryAttemptProvider);

  get isEnableOption() {
    return this.taonEmailDeliveryAttemptProvider.enabledTaonEmailDeliveryAttemptOption;
  }
}