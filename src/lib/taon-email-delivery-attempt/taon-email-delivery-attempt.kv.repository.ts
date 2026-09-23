//#region imports
import {
  TaonBaseRepository,
  TaonBaseKvRepository,
  TaonRepository,
} from 'taon/src';

import { TaonEmailDeliveryAttemptEntity } from './taon-email-delivery-attempt.entity';
//#endregion

@TaonRepository({
  className: 'TaonEmailDeliveryAttemptKvRepository',
})
export class TaonEmailDeliveryAttemptKvRepository extends TaonBaseKvRepository<{
  usersToNotify: TaonEmailDeliveryAttemptEntity[];
}> {
  async notifyUsers(users: TaonEmailDeliveryAttemptEntity[]) {
    this.set('usersToNotify', users);
  }
}