//#region imports
import { createContext, TaonBaseContext } from 'taon/src';

import { TaonEmailEventEntity } from './taon-email-event.entity';
import { TaonEmailEventController } from './taon-email-event.controller';
import { TaonEmailEventRepository } from './taon-email-event.repository';
// import { TaonEmailEventKvRepository } from './taon-email-event.kv.repository';
import { TaonEmailEventProvider } from './taon-email-event.provider';
// import { TaonEmailEventMiddleware } from './taon-email-event.middleware';
// import { TaonEmailEventSubscriber } from './taon-email-event.subscriber';
//#endregion

export const TaonEmailEventAbstractContext = createContext(() => ({
  contextName: 'TaonEmailEventAbstractContext',
  abstract: true,
  contexts: { TaonBaseContext },
  entities: { TaonEmailEventEntity },
  controllers: { TaonEmailEventController },
  repositories: {
    // TaonEmailEventKvRepository
    TaonEmailEventRepository,
  },
  providers: { TaonEmailEventProvider },
  // middlewares: { TaonEmailEventMiddleware },
  // subscribers: { TaonEmailEventSubscriber },
}));