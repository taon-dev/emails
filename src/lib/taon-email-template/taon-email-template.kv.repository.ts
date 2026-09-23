//#region imports
import {
  TaonBaseRepository,
  TaonBaseKvRepository,
  TaonRepository,
} from 'taon/src';

import { TaonEmailTemplateEntity } from './taon-email-template.entity';
//#endregion

@TaonRepository({
  className: 'TaonEmailTemplateKvRepository',
})
export class TaonEmailTemplateKvRepository extends TaonBaseKvRepository<{
  usersToNotify: TaonEmailTemplateEntity[];
}> {
  async notifyUsers(users: TaonEmailTemplateEntity[]) {
    this.set('usersToNotify', users);
  }
}