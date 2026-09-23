//#region imports
import { TaonBaseRepository, TaonRepository } from 'taon/src';
import { Raw } from 'taon-typeorm/src';

import { TaonEmailCampaignRecipientEntity } from './taon-email-campaign-recipient.entity';
//#endregion

@TaonRepository({
  className: 'TaonEmailCampaignRecipientRepository',
})
export class TaonEmailCampaignRecipientRepository extends TaonBaseRepository<TaonEmailCampaignRecipientEntity> {
  entityClassResolveFn: () => typeof TaonEmailCampaignRecipientEntity = () => TaonEmailCampaignRecipientEntity;

  /**
   * TODO remove this demo example method
   */
  async countEntitesWithEvenId(): Promise<number> {
    //#region @websqlFunc
    const result = await this.count({
      where: {
        id: Raw(alias => `${alias} % 2 = 0`),
      },
    });
    return result;
    //#endregion
  }
}