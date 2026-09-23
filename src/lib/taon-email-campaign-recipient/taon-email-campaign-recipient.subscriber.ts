//#region imports
import { TaonBaseSubscriberForEntity, TaonSubscriber } from 'taon/src';
import { TaonEmailCampaignRecipientEntity } from './taon-email-campaign-recipient.entity';
import { TaonEmailCampaignRecipientProvider } from './taon-email-campaign-recipient.provider';
//#endregion

@TaonSubscriber<TaonEmailCampaignRecipientSubscriber>({
  className: 'TaonEmailCampaignRecipientSubscriber',
  // allowedEvents: ['afterUpdate'],
})
export class TaonEmailCampaignRecipientSubscriber extends TaonBaseSubscriberForEntity {
  taonEmailCampaignRecipientProvider = this.injectProvider(TaonEmailCampaignRecipientProvider);
  listenTo(): typeof TaonEmailCampaignRecipientEntity {
    return TaonEmailCampaignRecipientEntity;
  }
}