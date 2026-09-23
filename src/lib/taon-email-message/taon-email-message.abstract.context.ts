//#region imports
import { createContext, TaonBaseContext } from 'taon/src';

import { TaonEmailMessageEntity } from './taon-email-message.entity';
import { TaonEmailMessageController } from './taon-email-message.controller';
import { TaonEmailMessageRepository } from './taon-email-message.repository';
// import { TaonEmailMessageKvRepository } from './taon-email-message.kv.repository';
import { TaonEmailMessageProvider } from './taon-email-message.provider';
// import { TaonEmailMessageMiddleware } from './taon-email-message.middleware';
// import { TaonEmailMessageSubscriber } from './taon-email-message.subscriber';
//#endregion

export const TaonEmailMessageAbstractContext = createContext(() => ({
  contextName: 'TaonEmailMessageAbstractContext',
  abstract: true,
  contexts: { TaonBaseContext },
  entities: { TaonEmailMessageEntity },
  controllers: { TaonEmailMessageController },
  repositories: {
    // TaonEmailMessageKvRepository
    TaonEmailMessageRepository,
  },
  providers: { TaonEmailMessageProvider },
  // middlewares: { TaonEmailMessageMiddleware },
  // subscribers: { TaonEmailMessageSubscriber },
}));