//#region imports
import {
  TaonBaseRepository,
  TaonBaseKvRepository,
  TaonRepository,
} from 'taon/src';

import { TaonEmailListMemberEntity } from './taon-email-list-member.entity';
//#endregion

@TaonRepository({
  className: 'TaonEmailListMemberKvRepository',
})
export class TaonEmailListMemberKvRepository extends TaonBaseKvRepository<{
  usersToNotify: TaonEmailListMemberEntity[];
}> {
  async notifyUsers(users: TaonEmailListMemberEntity[]) {
    this.set('usersToNotify', users);
  }
}