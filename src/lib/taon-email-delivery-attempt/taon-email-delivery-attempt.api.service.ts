//#region imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Taon, TaonBaseAngularService } from 'taon/src';

import type { TaonEmailDeliveryAttemptEntity } from './taon-email-delivery-attempt.entity';
import { TaonEmailDeliveryAttemptController } from './taon-email-delivery-attempt.controller';
//#endregion

@Injectable()
export class TaonEmailDeliveryAttemptApiService extends TaonBaseAngularService {
  private taonEmailDeliveryAttemptController = this.injectController(TaonEmailDeliveryAttemptController);

  public get allMyEntities$(): Observable<TaonEmailDeliveryAttemptEntity[]> {
    return this.taonEmailDeliveryAttemptController.getAll().request!().observable.pipe(
      map(res => res.body?.json),
    );
  }

  public helloWorld(user: string): Observable<string> {
    return this.taonEmailDeliveryAttemptController.helloWord(user).request!().observable.pipe(
      map(res => res.responseText as string),
    );
  }
}