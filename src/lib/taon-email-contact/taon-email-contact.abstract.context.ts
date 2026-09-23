//#region imports
import { createContext, TaonBaseContext } from 'taon/src';

import { TaonEmailContactEntity } from './taon-email-contact.entity';
import { TaonEmailContactController } from './taon-email-contact.controller';
import { TaonEmailContactRepository } from './taon-email-contact.repository';
// import { TaonEmailContactKvRepository } from './taon-email-contact.kv.repository';
import { TaonEmailContactProvider } from './taon-email-contact.provider';
// import { TaonEmailContactMiddleware } from './taon-email-contact.middleware';
// import { TaonEmailContactSubscriber } from './taon-email-contact.subscriber';
//#endregion

export const TaonEmailContactAbstractContext = createContext(() => ({
  contextName: 'TaonEmailContactAbstractContext',
  abstract: true,
  contexts: { TaonBaseContext },
  entities: { TaonEmailContactEntity },
  controllers: { TaonEmailContactController },
  repositories: {
    // TaonEmailContactKvRepository
    TaonEmailContactRepository,
  },
  providers: { TaonEmailContactProvider },
  // middlewares: { TaonEmailContactMiddleware },
  // subscribers: { TaonEmailContactSubscriber },
}));