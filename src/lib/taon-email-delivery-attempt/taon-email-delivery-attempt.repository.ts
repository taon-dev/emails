//#region imports
import { TaonBaseRepository, TaonRepository } from 'taon/src';
import { Raw } from 'taon-typeorm/src';

import { TaonEmailDeliveryAttemptEntity } from './taon-email-delivery-attempt.entity';
//#endregion

@TaonRepository({
  className: 'TaonEmailDeliveryAttemptRepository',
})
export class TaonEmailDeliveryAttemptRepository extends TaonBaseRepository<TaonEmailDeliveryAttemptEntity> {
  entityClassResolveFn: () => typeof TaonEmailDeliveryAttemptEntity = () => TaonEmailDeliveryAttemptEntity;

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