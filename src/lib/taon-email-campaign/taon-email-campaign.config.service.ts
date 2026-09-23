//#region imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Taon, TaonBaseAngularService } from 'taon/src';

import { TaonEmailCampaignProvider } from './taon-email-campaign.provider';
//#endregion

@Injectable()
export class TaonEmailCampaignConfigService extends TaonBaseAngularService {
  private taonEmailCampaignProvider = this.injectProvider(TaonEmailCampaignProvider);

  get isEnableOption() {
    return this.taonEmailCampaignProvider.enabledTaonEmailCampaignOption;
  }
}