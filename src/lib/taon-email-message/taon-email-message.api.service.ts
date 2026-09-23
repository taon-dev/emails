//#region imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Taon, TaonBaseAngularService } from 'taon/src';

import type { TaonEmailMessageEntity } from './taon-email-message.entity';
import { TaonEmailMessageController } from './taon-email-message.controller';
//#endregion

@Injectable()
export class TaonEmailMessageApiService extends TaonBaseAngularService {
  private taonEmailMessageController = this.injectController(TaonEmailMessageController);

  public get allMyEntities$(): Observable<TaonEmailMessageEntity[]> {
    return this.taonEmailMessageController.getAll().request!().observable.pipe(
      map(res => res.body?.json),
    );
  }

  public helloWorld(user: string): Observable<string> {
    return this.taonEmailMessageController.helloWord(user).request!().observable.pipe(
      map(res => res.responseText as string),
    );
  }
}