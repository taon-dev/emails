import { TaonEmailCampaignModels } from './taon-email-campaign.models';

export namespace TaonEmailCampaignUtils {
  export function isActive(state: string): state is TaonEmailCampaignModels.TaonEmailCampaignState {
    return state === 'active';
  }
}