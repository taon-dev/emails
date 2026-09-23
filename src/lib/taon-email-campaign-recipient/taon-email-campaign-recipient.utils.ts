import { TaonEmailCampaignRecipientModels } from './taon-email-campaign-recipient.models';

export namespace TaonEmailCampaignRecipientUtils {
  export function isActive(state: string): state is TaonEmailCampaignRecipientModels.TaonEmailCampaignRecipientState {
    return state === 'active';
  }
}