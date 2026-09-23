//#region imports
import { TaonBaseSubscriberForEntity, TaonSubscriber } from 'taon/src';
import { TaonEmailTemplateEntity } from './taon-email-template.entity';
import { TaonEmailTemplateProvider } from './taon-email-template.provider';
//#endregion

@TaonSubscriber<TaonEmailTemplateSubscriber>({
  className: 'TaonEmailTemplateSubscriber',
  // allowedEvents: ['afterUpdate'],
})
export class TaonEmailTemplateSubscriber extends TaonBaseSubscriberForEntity {
  taonEmailTemplateProvider = this.injectProvider(TaonEmailTemplateProvider);
  listenTo(): typeof TaonEmailTemplateEntity {
    return TaonEmailTemplateEntity;
  }
}