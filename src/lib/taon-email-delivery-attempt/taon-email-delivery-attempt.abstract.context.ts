//#region imports
import { createContext, TaonBaseContext } from 'taon/src';

import { TaonEmailDeliveryAttemptEntity } from './taon-email-delivery-attempt.entity';
import { TaonEmailDeliveryAttemptController } from './taon-email-delivery-attempt.controller';
import { TaonEmailDeliveryAttemptRepository } from './taon-email-delivery-attempt.repository';
// import { TaonEmailDeliveryAttemptKvRepository } from './taon-email-delivery-attempt.kv.repository';
import { TaonEmailDeliveryAttemptProvider } from './taon-email-delivery-attempt.provider';
// import { TaonEmailDeliveryAttemptMiddleware } from './taon-email-delivery-attempt.middleware';
// import { TaonEmailDeliveryAttemptSubscriber } from './taon-email-delivery-attempt.subscriber';
//#endregion

export const TaonEmailDeliveryAttemptAbstractContext = createContext(() => ({
  contextName: 'TaonEmailDeliveryAttemptAbstractContext',
  abstract: true,
  contexts: { TaonBaseContext },
  entities: { TaonEmailDeliveryAttemptEntity },
  controllers: { TaonEmailDeliveryAttemptController },
  repositories: {
    // TaonEmailDeliveryAttemptKvRepository
    TaonEmailDeliveryAttemptRepository,
  },
  providers: { TaonEmailDeliveryAttemptProvider },
  // middlewares: { TaonEmailDeliveryAttemptMiddleware },
  // subscribers: { TaonEmailDeliveryAttemptSubscriber },
}));