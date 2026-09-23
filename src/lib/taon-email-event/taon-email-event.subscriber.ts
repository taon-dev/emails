//#region imports
import { TaonBaseSubscriberForEntity, TaonSubscriber } from 'taon/src';
import { TaonEmailEventEntity } from './taon-email-event.entity';
import { TaonEmailEventProvider } from './taon-email-event.provider';
//#endregion

@TaonSubscriber<TaonEmailEventSubscriber>({
  className: 'TaonEmailEventSubscriber',
  // allowedEvents: ['afterUpdate'],
})
export class TaonEmailEventSubscriber extends TaonBaseSubscriberForEntity {
  taonEmailEventProvider = this.injectProvider(TaonEmailEventProvider);
  listenTo(): typeof TaonEmailEventEntity {
    return TaonEmailEventEntity;
  }
}