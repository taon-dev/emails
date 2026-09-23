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

import { TaonEmailDeliveryAttemptEntity } from './taon-email-delivery-attempt.entity';
import { TaonEmailDeliveryAttemptRepository } from './taon-email-delivery-attempt.repository';
//#endregion

@TaonController<TaonEmailDeliveryAttemptController>({
  className: 'TaonEmailDeliveryAttemptController',
  allowedMethods: [],
})
export class TaonEmailDeliveryAttemptController extends TaonBaseCrudController<TaonEmailDeliveryAttemptEntity> {
  entityClassResolveFn: () => typeof TaonEmailDeliveryAttemptEntity = () => TaonEmailDeliveryAttemptEntity;

  taonEmailDeliveryAttemptRepository = this.injectCustomRepo(TaonEmailDeliveryAttemptRepository);

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
        await this.taonEmailDeliveryAttemptRepository.countEntitesWithEvenId();
      return `Hello ${yourName || 'world'} from ${ClassHelpers.getName(TaonEmailDeliveryAttemptController)}
      controller..  ${numOfEntities} entites in db..
      ${numberOfEvenEntities} entites with even ids (2,4,6,8 etc.)
      `;
    };
    //#endregion
  }
  //#endregion
}
