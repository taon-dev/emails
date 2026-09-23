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

import { TaonEmailMessageEntity } from './taon-email-message.entity';
import { TaonEmailMessageRepository } from './taon-email-message.repository';
//#endregion

@TaonController<TaonEmailMessageController>({
  className: 'TaonEmailMessageController',
  allowedMethods: [],
})
export class TaonEmailMessageController extends TaonBaseCrudController<TaonEmailMessageEntity> {
  entityClassResolveFn: () => typeof TaonEmailMessageEntity = () => TaonEmailMessageEntity;

  taonEmailMessageRepository = this.injectCustomRepo(TaonEmailMessageRepository);

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
        await this.taonEmailMessageRepository.countEntitesWithEvenId();
      return `Hello ${yourName || 'world'} from ${ClassHelpers.getName(TaonEmailMessageController)}
      controller..  ${numOfEntities} entites in db..
      ${numberOfEvenEntities} entites with even ids (2,4,6,8 etc.)
      `;
    };
    //#endregion
  }
  //#endregion
}
