//#region imports
import { createContext, TaonBaseContext } from 'taon/src';

import { TaonEmailCampaignRecipientEntity } from './taon-email-campaign-recipient.entity';
import { TaonEmailCampaignRecipientController } from './taon-email-campaign-recipient.controller';
import { TaonEmailCampaignRecipientRepository } from './taon-email-campaign-recipient.repository';
// import { TaonEmailCampaignRecipientKvRepository } from './taon-email-campaign-recipient.kv.repository';
import { TaonEmailCampaignRecipientProvider } from './taon-email-campaign-recipient.provider';
// import { TaonEmailCampaignRecipientMiddleware } from './taon-email-campaign-recipient.middleware';
// import { TaonEmailCampaignRecipientSubscriber } from './taon-email-campaign-recipient.subscriber';
//#endregion

export const TaonEmailCampaignRecipientAbstractContext = createContext(() => ({
  contextName: 'TaonEmailCampaignRecipientAbstractContext',
  abstract: true,
  contexts: { TaonBaseContext },
  entities: { TaonEmailCampaignRecipientEntity },
  controllers: { TaonEmailCampaignRecipientController },
  repositories: {
    // TaonEmailCampaignRecipientKvRepository
    TaonEmailCampaignRecipientRepository,
  },
  providers: { TaonEmailCampaignRecipientProvider },
  // middlewares: { TaonEmailCampaignRecipientMiddleware },
  // subscribers: { TaonEmailCampaignRecipientSubscriber },
}));