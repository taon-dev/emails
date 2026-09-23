//#region imports
import {
  TaonBaseRepository,
  TaonBaseKvRepository,
  TaonRepository,
} from 'taon/src';

import { TaonEmailListEntity } from './taon-email-list.entity';
//#endregion

@TaonRepository({
  className: 'TaonEmailListKvRepository',
})
export class TaonEmailListKvRepository extends TaonBaseKvRepository<{
  usersToNotify: TaonEmailListEntity[];
}> {
  async notifyUsers(users: TaonEmailListEntity[]) {
    this.set('usersToNotify', users);
  }
}