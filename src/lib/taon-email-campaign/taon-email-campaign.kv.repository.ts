//#region imports
import {
  TaonBaseRepository,
  TaonBaseKvRepository,
  TaonRepository,
} from 'taon/src';

import { TaonEmailCampaignEntity } from './taon-email-campaign.entity';
//#endregion

@TaonRepository({
  className: 'TaonEmailCampaignKvRepository',
})
export class TaonEmailCampaignKvRepository extends TaonBaseKvRepository<{
  usersToNotify: TaonEmailCampaignEntity[];
}> {
  async notifyUsers(users: TaonEmailCampaignEntity[]) {
    this.set('usersToNotify', users);
  }
}