//#region imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Taon, TaonBaseAngularService } from 'taon/src';

import { TaonEmailCampaignRecipientProvider } from './taon-email-campaign-recipient.provider';
//#endregion

@Injectable()
export class TaonEmailCampaignRecipientConfigService extends TaonBaseAngularService {
  private taonEmailCampaignRecipientProvider = this.injectProvider(TaonEmailCampaignRecipientProvider);

  get isEnableOption() {
    return this.taonEmailCampaignRecipientProvider.enabledTaonEmailCampaignRecipientOption;
  }
}