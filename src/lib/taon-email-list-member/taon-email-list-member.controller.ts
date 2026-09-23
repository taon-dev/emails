//#region imports
import {
  Taon,
  ClassHelpers,
  TaonController,
  TaonBaseCrudController,
  Query,
  GET,
} from 'taon/src';
import { _ } from 'tnp-core/src';

import { TaonEmailListMemberEntity } from './taon-email-list-member.entity';
import { TaonEmailListMemberRepository } from './taon-email-list-member.repository';
//#endregion

@TaonController<TaonEmailListMemberController>({
  className: 'TaonEmailListMemberController',
  allowedMethods: [],
})
export class TaonEmailListMemberController extends TaonBaseCrudController<TaonEmailListMemberEntity> {
  entityClassResolveFn: () => typeof TaonEmailListMemberEntity = () => TaonEmailListMemberEntity;

  taonEmailListMemberRepository = this.injectCustomRepo(TaonEmailListMemberRepository);

  //#region methods & getters / hello world
  /**
   * TODO remove this demo example method
   */
  @GET()
  helloWord(@Query('yourName') yourName: string): Taon.Response<string> {
    //#region @websqlFunc
    return async (req, res) => {
      const numOfEntities = await this.db.count();
      const numberOfEvenEntities =
        await this.taonEmailListMemberRepository.countEntitesWithEvenId();
      return `Hello ${yourName || 'world'} from ${ClassHelpers.getName(TaonEmailListMemberController)}
      controller..  ${numOfEntities} entites in db..
      ${numberOfEvenEntities} entites with even ids (2,4,6,8 etc.)
      `;
    };
    //#endregion
  }
  //#endregion
}
