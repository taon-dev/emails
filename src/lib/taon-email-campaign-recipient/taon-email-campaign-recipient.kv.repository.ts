//#region imports
import {
  TaonBaseRepository,
  TaonBaseKvRepository,
  TaonRepository,
} from 'taon/src';

import { TaonEmailCampaignRecipientEntity } from './taon-email-campaign-recipient.entity';
//#endregion

@TaonRepository({
  className: 'TaonEmailCampaignRecipientKvRepository',
})
export class TaonEmailCampaignRecipientKvRepository extends TaonBaseKvRepository<{
  usersToNotify: TaonEmailCampaignRecipientEntity[];
}> {
  async notifyUsers(users: TaonEmailCampaignRecipientEntity[]) {
    this.set('usersToNotify', users);
  }
}