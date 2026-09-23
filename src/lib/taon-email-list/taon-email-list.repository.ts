//#region imports
import { TaonBaseRepository, TaonRepository } from 'taon/src';
import { Raw } from 'taon-typeorm/src';

import { TaonEmailListEntity } from './taon-email-list.entity';
//#endregion

@TaonRepository({
  className: 'TaonEmailListRepository',
})
export class TaonEmailListRepository extends TaonBaseRepository<TaonEmailListEntity> {
  entityClassResolveFn: () => typeof TaonEmailListEntity = () => TaonEmailListEntity;

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