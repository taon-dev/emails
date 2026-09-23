//#region imports
import {
  TaonBaseRepository,
  TaonBaseKvRepository,
  TaonRepository,
} from 'taon/src';

import { TaonEmailMessageEntity } from './taon-email-message.entity';
//#endregion

@TaonRepository({
  className: 'TaonEmailMessageKvRepository',
})
export class TaonEmailMessageKvRepository extends TaonBaseKvRepository<{
  usersToNotify: TaonEmailMessageEntity[];
}> {
  async notifyUsers(users: TaonEmailMessageEntity[]) {
    this.set('usersToNotify', users);
  }
}