//#region imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Taon, TaonBaseAngularService } from 'taon/src';

import type { TaonEmailListMemberEntity } from './taon-email-list-member.entity';
import { TaonEmailListMemberController } from './taon-email-list-member.controller';
//#endregion

@Injectable()
export class TaonEmailListMemberApiService extends TaonBaseAngularService {
  private taonEmailListMemberController = this.injectController(TaonEmailListMemberController);

  public get allMyEntities$(): Observable<TaonEmailListMemberEntity[]> {
    return this.taonEmailListMemberController.getAll().request!().observable.pipe(
      map(res => res.body?.json),
    );
  }

  public helloWorld(user: string): Observable<string> {
    return this.taonEmailListMemberController.helloWord(user).request!().observable.pipe(
      map(res => res.responseText as string),
    );
  }
}