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

import { TaonEmailCampaignEntity } from './taon-email-campaign.entity';
import { TaonEmailCampaignRepository } from './taon-email-campaign.repository';
//#endregion

@TaonController<TaonEmailCampaignController>({
  className: 'TaonEmailCampaignController',
  allowedMethods: [],
})
export class TaonEmailCampaignController extends TaonBaseCrudController<TaonEmailCampaignEntity> {
  entityClassResolveFn: () => typeof TaonEmailCampaignEntity = () =>
    TaonEmailCampaignEntity;

  taonEmailCampaignRepository = this.injectCustomRepo(
    TaonEmailCampaignRepository,
  );

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
        await this.taonEmailCampaignRepository.countEntitesWithEvenId();
      return `Hello ${yourName || 'world'} from ${ClassHelpers.getName(TaonEmailCampaignController)}
      controller..  ${numOfEntities} entites in db..
      ${numberOfEvenEntities} entites with even ids (2,4,6,8 etc.)
      `;
    };
    //#endregion
  }
  //#endregion
}
