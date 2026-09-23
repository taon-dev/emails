//#region imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Taon, TaonBaseAngularService } from 'taon/src';

import type { TaonEmailCampaignEntity } from './taon-email-campaign.entity';
import { TaonEmailCampaignController } from './taon-email-campaign.controller';
//#endregion

@Injectable()
export class TaonEmailCampaignApiService extends TaonBaseAngularService {
  private taonEmailCampaignController = this.injectController(TaonEmailCampaignController);

  public get allMyEntities$(): Observable<TaonEmailCampaignEntity[]> {
    return this.taonEmailCampaignController.getAll().request!().observable.pipe(
      map(res => res.body?.json),
    );
  }

  public helloWorld(user: string): Observable<string> {
    return this.taonEmailCampaignController.helloWord(user).request!().observable.pipe(
      map(res => res.responseText as string),
    );
  }
}