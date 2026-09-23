//#region imports
import { TaonBaseRepository, TaonRepository } from 'taon/src';
import { Raw } from 'taon-typeorm/src';

import { TaonEmailMessageEntity } from './taon-email-message.entity';
//#endregion

@TaonRepository({
  className: 'TaonEmailMessageRepository',
})
export class TaonEmailMessageRepository extends TaonBaseRepository<TaonEmailMessageEntity> {
  entityClassResolveFn: () => typeof TaonEmailMessageEntity = () => TaonEmailMessageEntity;

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