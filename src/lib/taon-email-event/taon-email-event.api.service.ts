//#region imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Taon, TaonBaseAngularService } from 'taon/src';

import type { TaonEmailEventEntity } from './taon-email-event.entity';
import { TaonEmailEventController } from './taon-email-event.controller';
//#endregion

@Injectable()
export class TaonEmailEventApiService extends TaonBaseAngularService {
  private taonEmailEventController = this.injectController(TaonEmailEventController);

  public get allMyEntities$(): Observable<TaonEmailEventEntity[]> {
    return this.taonEmailEventController.getAll().request!().observable.pipe(
      map(res => res.body?.json),
    );
  }

  public helloWorld(user: string): Observable<string> {
    return this.taonEmailEventController.helloWord(user).request!().observable.pipe(
      map(res => res.responseText as string),
    );
  }
}