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

import { TaonEmailContactEntity } from './taon-email-contact.entity';
import { TaonEmailContactRepository } from './taon-email-contact.repository';
//#endregion

@TaonController<TaonEmailContactController>({
  className: 'TaonEmailContactController',
  allowedMethods: [],
})
export class TaonEmailContactController extends TaonBaseCrudController<TaonEmailContactEntity> {
  entityClassResolveFn: () => typeof TaonEmailContactEntity = () => TaonEmailContactEntity;

  taonEmailContactRepository = this.injectCustomRepo(TaonEmailContactRepository);

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
        await this.taonEmailContactRepository.countEntitesWithEvenId();
      return `Hello ${yourName || 'world'} from ${ClassHelpers.getName(TaonEmailContactController)}
      controller..  ${numOfEntities} entites in db..
      ${numberOfEvenEntities} entites with even ids (2,4,6,8 etc.)
      `;
    };
    //#endregion
  }
  //#endregion
}
