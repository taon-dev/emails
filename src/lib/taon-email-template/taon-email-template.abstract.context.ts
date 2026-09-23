//#region imports
import { createContext, TaonBaseContext } from 'taon/src';

import { TaonEmailTemplateEntity } from './taon-email-template.entity';
import { TaonEmailTemplateController } from './taon-email-template.controller';
import { TaonEmailTemplateRepository } from './taon-email-template.repository';
// import { TaonEmailTemplateKvRepository } from './taon-email-template.kv.repository';
import { TaonEmailTemplateProvider } from './taon-email-template.provider';
// import { TaonEmailTemplateMiddleware } from './taon-email-template.middleware';
// import { TaonEmailTemplateSubscriber } from './taon-email-template.subscriber';
//#endregion

export const TaonEmailTemplateAbstractContext = createContext(() => ({
  contextName: 'TaonEmailTemplateAbstractContext',
  abstract: true,
  contexts: { TaonBaseContext },
  entities: { TaonEmailTemplateEntity },
  controllers: { TaonEmailTemplateController },
  repositories: {
    // TaonEmailTemplateKvRepository
    TaonEmailTemplateRepository,
  },
  providers: { TaonEmailTemplateProvider },
  // middlewares: { TaonEmailTemplateMiddleware },
  // subscribers: { TaonEmailTemplateSubscriber },
}));