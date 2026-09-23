//#region imports
import { TaonBaseSubscriberForEntity, TaonSubscriber } from 'taon/src';
import { TaonEmailMessageEntity } from './taon-email-message.entity';
import { TaonEmailMessageProvider } from './taon-email-message.provider';
//#endregion

@TaonSubscriber<TaonEmailMessageSubscriber>({
  className: 'TaonEmailMessageSubscriber',
  // allowedEvents: ['afterUpdate'],
})
export class TaonEmailMessageSubscriber extends TaonBaseSubscriberForEntity {
  taonEmailMessageProvider = this.injectProvider(TaonEmailMessageProvider);
  listenTo(): typeof TaonEmailMessageEntity {
    return TaonEmailMessageEntity;
  }
}