//#region imports
import {
  TaonBaseRepository,
  TaonBaseKvRepository,
  TaonRepository,
} from 'taon/src';

import { TaonEmailContactEntity } from './taon-email-contact.entity';
//#endregion

@TaonRepository({
  className: 'TaonEmailContactKvRepository',
})
export class TaonEmailContactKvRepository extends TaonBaseKvRepository<{
  usersToNotify: TaonEmailContactEntity[];
}> {
  async notifyUsers(users: TaonEmailContactEntity[]) {
    this.set('usersToNotify', users);
  }
}