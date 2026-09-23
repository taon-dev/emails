//#region imports
import { TaonBaseSubscriberForEntity, TaonSubscriber } from 'taon/src';
import { TaonEmailContactEntity } from './taon-email-contact.entity';
import { TaonEmailContactProvider } from './taon-email-contact.provider';
//#endregion

@TaonSubscriber<TaonEmailContactSubscriber>({
  className: 'TaonEmailContactSubscriber',
  // allowedEvents: ['afterUpdate'],
})
export class TaonEmailContactSubscriber extends TaonBaseSubscriberForEntity {
  taonEmailContactProvider = this.injectProvider(TaonEmailContactProvider);
  listenTo(): typeof TaonEmailContactEntity {
    return TaonEmailContactEntity;
  }
}