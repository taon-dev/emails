//#region imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Taon, TaonBaseAngularService } from 'taon/src';

import type { TaonEmailListEntity } from './taon-email-list.entity';
import { TaonEmailListController } from './taon-email-list.controller';
//#endregion

@Injectable()
export class TaonEmailListApiService extends TaonBaseAngularService {
  private taonEmailListController = this.injectController(TaonEmailListController);

  public get allMyEntities$(): Observable<TaonEmailListEntity[]> {
    return this.taonEmailListController.getAll().request!().observable.pipe(
      map(res => res.body?.json),
    );
  }

  public helloWorld(user: string): Observable<string> {
    return this.taonEmailListController.helloWord(user).request!().observable.pipe(
      map(res => res.responseText as string),
    );
  }
}