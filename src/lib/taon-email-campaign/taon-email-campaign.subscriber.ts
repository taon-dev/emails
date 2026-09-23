//#region imports
import { TaonBaseSubscriberForEntity, TaonSubscriber } from 'taon/src';
import { TaonEmailCampaignEntity } from './taon-email-campaign.entity';
import { TaonEmailCampaignProvider } from './taon-email-campaign.provider';
//#endregion

@TaonSubscriber<TaonEmailCampaignSubscriber>({
  className: 'TaonEmailCampaignSubscriber',
  // allowedEvents: ['afterUpdate'],
})
export class TaonEmailCampaignSubscriber extends TaonBaseSubscriberForEntity {
  taonEmailCampaignProvider = this.injectProvider(TaonEmailCampaignProvider);
  listenTo(): typeof TaonEmailCampaignEntity {
    return TaonEmailCampaignEntity;
  }
}