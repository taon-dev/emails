// THIS FILE IS GENERATED - DO NOT MODIFY
import { createContext, TaonBaseContext } from 'taon/src';
import { TaonEmailCampaignAbstractContext } from './taon-email-campaign/taon-email-campaign.abstract.context';
import { TaonEmailCampaignRecipientAbstractContext } from './taon-email-campaign-recipient/taon-email-campaign-recipient.abstract.context';
import { TaonEmailContactAbstractContext } from './taon-email-contact/taon-email-contact.abstract.context';
import { TaonEmailDeliveryAttemptAbstractContext } from './taon-email-delivery-attempt/taon-email-delivery-attempt.abstract.context';
import { TaonEmailEventAbstractContext } from './taon-email-event/taon-email-event.abstract.context';
import { TaonEmailListAbstractContext } from './taon-email-list/taon-email-list.abstract.context';
import { TaonEmailListMemberAbstractContext } from './taon-email-list-member/taon-email-list-member.abstract.context';
import { TaonEmailMessageAbstractContext } from './taon-email-message/taon-email-message.abstract.context';
import { TaonEmailTemplateAbstractContext } from './taon-email-template/taon-email-template.abstract.context';

export const TaonEmailsAbstractContext = createContext(() => ({
  contextName: 'TaonEmailsAbstractContext',
  abstract: true,
  contexts: {
    TaonEmailCampaignAbstractContext,
    TaonEmailCampaignRecipientAbstractContext,
    TaonEmailContactAbstractContext,
    TaonEmailDeliveryAttemptAbstractContext,
    TaonEmailEventAbstractContext,
    TaonEmailListAbstractContext,
    TaonEmailListMemberAbstractContext,
    TaonEmailMessageAbstractContext,
    TaonEmailTemplateAbstractContext,
  },
}));

// THIS FILE IS GENERATED - DO NOT MODIFY
