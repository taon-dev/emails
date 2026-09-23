//#region imports
import { createContext, TaonBaseContext } from 'taon/src';

import { TaonEmailCampaignEntity } from './taon-email-campaign.entity';
import { TaonEmailCampaignController } from './taon-email-campaign.controller';
import { TaonEmailCampaignRepository } from './taon-email-campaign.repository';
// import { TaonEmailCampaignKvRepository } from './taon-email-campaign.kv.repository';
import { TaonEmailCampaignProvider } from './taon-email-campaign.provider';
// import { TaonEmailCampaignMiddleware } from './taon-email-campaign.middleware';
// import { TaonEmailCampaignSubscriber } from './taon-email-campaign.subscriber';
//#endregion

export const TaonEmailCampaignAbstractContext = createContext(() => ({
  contextName: 'TaonEmailCampaignAbstractContext',
  abstract: true,
  contexts: { TaonBaseContext },
  entities: { TaonEmailCampaignEntity },
  controllers: { TaonEmailCampaignController },
  repositories: {
    // TaonEmailCampaignKvRepository
    TaonEmailCampaignRepository,
  },
  providers: { TaonEmailCampaignProvider },
  // middlewares: { TaonEmailCampaignMiddleware },
  // subscribers: { TaonEmailCampaignSubscriber },
}));