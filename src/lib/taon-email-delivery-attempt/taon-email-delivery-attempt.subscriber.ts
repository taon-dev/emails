//#region imports
import { TaonBaseSubscriberForEntity, TaonSubscriber } from 'taon/src';
import { TaonEmailDeliveryAttemptEntity } from './taon-email-delivery-attempt.entity';
import { TaonEmailDeliveryAttemptProvider } from './taon-email-delivery-attempt.provider';
//#endregion

@TaonSubscriber<TaonEmailDeliveryAttemptSubscriber>({
  className: 'TaonEmailDeliveryAttemptSubscriber',
  // allowedEvents: ['afterUpdate'],
})
export class TaonEmailDeliveryAttemptSubscriber extends TaonBaseSubscriberForEntity {
  taonEmailDeliveryAttemptProvider = this.injectProvider(TaonEmailDeliveryAttemptProvider);
  listenTo(): typeof TaonEmailDeliveryAttemptEntity {
    return TaonEmailDeliveryAttemptEntity;
  }
}