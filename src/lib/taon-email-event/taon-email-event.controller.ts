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

import { TaonEmailEventEntity } from './taon-email-event.entity';
import { TaonEmailEventRepository } from './taon-email-event.repository';
//#endregion

@TaonController<TaonEmailEventController>({
  className: 'TaonEmailEventController',
  allowedMethods: [],
})
export class TaonEmailEventController extends TaonBaseCrudController<TaonEmailEventEntity> {
  entityClassResolveFn: () => typeof TaonEmailEventEntity = () =>
    TaonEmailEventEntity;

  taonEmailEventRepository = this.injectCustomRepo(TaonEmailEventRepository);

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
        await this.taonEmailEventRepository.countEntitesWithEvenId();
      return `Hello ${yourName || 'world'} from ${ClassHelpers.getName(TaonEmailEventController)}
      controller..  ${numOfEntities} entites in db..
      ${numberOfEvenEntities} entites with even ids (2,4,6,8 etc.)
      `;
    };
    //#endregion
  }
  //#endregion
}
