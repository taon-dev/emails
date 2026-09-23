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

import { TaonEmailListEntity } from './taon-email-list.entity';
import { TaonEmailListRepository } from './taon-email-list.repository';
//#endregion

@TaonController<TaonEmailListController>({
  className: 'TaonEmailListController',
  allowedMethods: [],
})
export class TaonEmailListController extends TaonBaseCrudController<TaonEmailListEntity> {
  entityClassResolveFn: () => typeof TaonEmailListEntity = () => TaonEmailListEntity;

  taonEmailListRepository = this.injectCustomRepo(TaonEmailListRepository);

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
        await this.taonEmailListRepository.countEntitesWithEvenId();
      return `Hello ${yourName || 'world'} from ${ClassHelpers.getName(TaonEmailListController)}
      controller..  ${numOfEntities} entites in db..
      ${numberOfEvenEntities} entites with even ids (2,4,6,8 etc.)
      `;
    };
    //#endregion
  }
  //#endregion
}
