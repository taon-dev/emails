//#region imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Taon, TaonBaseAngularService } from 'taon/src';

import { TaonEmailTemplateProvider } from './taon-email-template.provider';
//#endregion

@Injectable()
export class TaonEmailTemplateConfigService extends TaonBaseAngularService {
  private taonEmailTemplateProvider = this.injectProvider(TaonEmailTemplateProvider);

  get isEnableOption() {
    return this.taonEmailTemplateProvider.enabledTaonEmailTemplateOption;
  }
}