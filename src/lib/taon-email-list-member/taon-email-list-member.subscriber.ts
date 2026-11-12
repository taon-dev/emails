//#region imports
import { TaonBaseSubscriberForEntity, TaonSubscriber } from 'taon/src';
import { TaonEmailListMemberEntity } from './taon-email-list-member.entity';
import { TaonEmailListMemberProvider } from './taon-email-list-member.provider';
//#endregion

@TaonSubscriber<TaonEmailListMemberSubscriber>({
  className: 'TaonEmailListMemberSubscriber',
  // allowedEvents: ['afterUpdate'],
})
export class TaonEmailListMemberSubscriber extends TaonBaseSubscriberForEntity {
  taonEmailListMemberProvider = this.inject(TaonEmailListMemberProvider);
  listenTo(): typeof TaonEmailListMemberEntity {
    return TaonEmailListMemberEntity;
  }
}
