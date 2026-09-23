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

import { TaonEmailTemplateEntity } from './taon-email-template.entity';
import { TaonEmailTemplateRepository } from './taon-email-template.repository';
//#endregion

@TaonController<TaonEmailTemplateController>({
  className: 'TaonEmailTemplateController',
  allowedMethods: [],
})
export class TaonEmailTemplateController extends TaonBaseCrudController<TaonEmailTemplateEntity> {
  entityClassResolveFn: () => typeof TaonEmailTemplateEntity = () => TaonEmailTemplateEntity;

  taonEmailTemplateRepository = this.injectCustomRepo(TaonEmailTemplateRepository);

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
        await this.taonEmailTemplateRepository.countEntitesWithEvenId();
      return `Hello ${yourName || 'world'} from ${ClassHelpers.getName(TaonEmailTemplateController)}
      controller..  ${numOfEntities} entites in db..
      ${numberOfEvenEntities} entites with even ids (2,4,6,8 etc.)
      `;
    };
    //#endregion
  }
  //#endregion
}
