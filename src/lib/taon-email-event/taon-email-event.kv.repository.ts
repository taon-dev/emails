//#region imports
import {
  TaonBaseRepository,
  TaonBaseKvRepository,
  TaonRepository,
} from 'taon/src';

import { TaonEmailEventEntity } from './taon-email-event.entity';
//#endregion

@TaonRepository({
  className: 'TaonEmailEventKvRepository',
})
export class TaonEmailEventKvRepository extends TaonBaseKvRepository<{
  usersToNotify: TaonEmailEventEntity[];
}> {
  async notifyUsers(users: TaonEmailEventEntity[]) {
    this.set('usersToNotify', users);
  }
}