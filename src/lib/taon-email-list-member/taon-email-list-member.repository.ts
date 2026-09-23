//#region imports
import { TaonBaseRepository, TaonRepository } from 'taon/src';
import { Raw } from 'taon-typeorm/src';

import { TaonEmailListMemberEntity } from './taon-email-list-member.entity';
//#endregion

@TaonRepository({
  className: 'TaonEmailListMemberRepository',
})
export class TaonEmailListMemberRepository extends TaonBaseRepository<TaonEmailListMemberEntity> {
  entityClassResolveFn: () => typeof TaonEmailListMemberEntity = () => TaonEmailListMemberEntity;

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