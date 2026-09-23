//#region imports
import { TaonBaseRepository, TaonRepository } from 'taon/src';
import { Raw } from 'taon-typeorm/src';

import { TaonEmailCampaignEntity } from './taon-email-campaign.entity';
//#endregion

@TaonRepository({
  className: 'TaonEmailCampaignRepository',
})
export class TaonEmailCampaignRepository extends TaonBaseRepository<TaonEmailCampaignEntity> {
  entityClassResolveFn: () => typeof TaonEmailCampaignEntity = () => TaonEmailCampaignEntity;

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