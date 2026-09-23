//#region imports
import { createContext, TaonBaseContext } from 'taon/src';

import { TaonEmailListEntity } from './taon-email-list.entity';
import { TaonEmailListController } from './taon-email-list.controller';
import { TaonEmailListRepository } from './taon-email-list.repository';
// import { TaonEmailListKvRepository } from './taon-email-list.kv.repository';
import { TaonEmailListProvider } from './taon-email-list.provider';
// import { TaonEmailListMiddleware } from './taon-email-list.middleware';
// import { TaonEmailListSubscriber } from './taon-email-list.subscriber';
//#endregion

export const TaonEmailListAbstractContext = createContext(() => ({
  contextName: 'TaonEmailListAbstractContext',
  abstract: true,
  contexts: { TaonBaseContext },
  entities: { TaonEmailListEntity },
  controllers: { TaonEmailListController },
  repositories: {
    // TaonEmailListKvRepository
    TaonEmailListRepository,
  },
  providers: { TaonEmailListProvider },
  // middlewares: { TaonEmailListMiddleware },
  // subscribers: { TaonEmailListSubscriber },
}));