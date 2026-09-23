//#region imports
import { TaonBaseSubscriberForEntity, TaonSubscriber } from 'taon/src';
import { TaonEmailListEntity } from './taon-email-list.entity';
import { TaonEmailListProvider } from './taon-email-list.provider';
//#endregion

@TaonSubscriber<TaonEmailListSubscriber>({
  className: 'TaonEmailListSubscriber',
  // allowedEvents: ['afterUpdate'],
})
export class TaonEmailListSubscriber extends TaonBaseSubscriberForEntity {
  taonEmailListProvider = this.injectProvider(TaonEmailListProvider);
  listenTo(): typeof TaonEmailListEntity {
    return TaonEmailListEntity;
  }
}