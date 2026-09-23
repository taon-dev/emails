//#region imports
import { TaonBaseRepository, TaonRepository } from 'taon/src';
import { Raw } from 'taon-typeorm/src';

import { TaonEmailEventEntity } from './taon-email-event.entity';
//#endregion

@TaonRepository({
  className: 'TaonEmailEventRepository',
})
export class TaonEmailEventRepository extends TaonBaseRepository<TaonEmailEventEntity> {
  entityClassResolveFn: () => typeof TaonEmailEventEntity = () => TaonEmailEventEntity;

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