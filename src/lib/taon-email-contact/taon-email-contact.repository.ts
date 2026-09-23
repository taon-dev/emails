//#region imports
import { TaonBaseRepository, TaonRepository } from 'taon/src';
import { Raw } from 'taon-typeorm/src';

import { TaonEmailContactEntity } from './taon-email-contact.entity';
//#endregion

@TaonRepository({
  className: 'TaonEmailContactRepository',
})
export class TaonEmailContactRepository extends TaonBaseRepository<TaonEmailContactEntity> {
  entityClassResolveFn: () => typeof TaonEmailContactEntity = () => TaonEmailContactEntity;

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