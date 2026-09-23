//#region imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Taon, TaonBaseAngularService } from 'taon/src';

import type { TaonEmailTemplateEntity } from './taon-email-template.entity';
import { TaonEmailTemplateController } from './taon-email-template.controller';
//#endregion

@Injectable()
export class TaonEmailTemplateApiService extends TaonBaseAngularService {
  private taonEmailTemplateController = this.injectController(TaonEmailTemplateController);

  public get allMyEntities$(): Observable<TaonEmailTemplateEntity[]> {
    return this.taonEmailTemplateController.getAll().request!().observable.pipe(
      map(res => res.body?.json),
    );
  }

  public helloWorld(user: string): Observable<string> {
    return this.taonEmailTemplateController.helloWord(user).request!().observable.pipe(
      map(res => res.responseText as string),
    );
  }
}