//#region imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Taon, TaonBaseAngularService } from 'taon/src';

import type { TaonEmailCampaignRecipientEntity } from './taon-email-campaign-recipient.entity';
import { TaonEmailCampaignRecipientController } from './taon-email-campaign-recipient.controller';
//#endregion

@Injectable()
export class TaonEmailCampaignRecipientApiService extends TaonBaseAngularService {
  private taonEmailCampaignRecipientController = this.injectController(TaonEmailCampaignRecipientController);

  public get allMyEntities$(): Observable<TaonEmailCampaignRecipientEntity[]> {
    return this.taonEmailCampaignRecipientController.getAll().request!().observable.pipe(
      map(res => res.body?.json),
    );
  }

  public helloWorld(user: string): Observable<string> {
    return this.taonEmailCampaignRecipientController.helloWord(user).request!().observable.pipe(
      map(res => res.responseText as string),
    );
  }
}