//#region imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Taon, TaonBaseAngularService } from 'taon/src';

import type { TaonEmailContactEntity } from './taon-email-contact.entity';
import { TaonEmailContactController } from './taon-email-contact.controller';
//#endregion

@Injectable()
export class TaonEmailContactApiService extends TaonBaseAngularService {
  private taonEmailContactController = this.injectController(TaonEmailContactController);

  public get allMyEntities$(): Observable<TaonEmailContactEntity[]> {
    return this.taonEmailContactController.getAll().request!().observable.pipe(
      map(res => res.body?.json),
    );
  }

  public helloWorld(user: string): Observable<string> {
    return this.taonEmailContactController.helloWord(user).request!().observable.pipe(
      map(res => res.responseText as string),
    );
  }
}