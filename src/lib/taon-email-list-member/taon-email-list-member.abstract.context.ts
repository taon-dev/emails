//#region imports
import { createContext, TaonBaseContext } from 'taon/src';

import { TaonEmailListMemberEntity } from './taon-email-list-member.entity';
import { TaonEmailListMemberController } from './taon-email-list-member.controller';
import { TaonEmailListMemberRepository } from './taon-email-list-member.repository';
// import { TaonEmailListMemberKvRepository } from './taon-email-list-member.kv.repository';
import { TaonEmailListMemberProvider } from './taon-email-list-member.provider';
// import { TaonEmailListMemberMiddleware } from './taon-email-list-member.middleware';
// import { TaonEmailListMemberSubscriber } from './taon-email-list-member.subscriber';
//#endregion

export const TaonEmailListMemberAbstractContext = createContext(() => ({
  contextName: 'TaonEmailListMemberAbstractContext',
  abstract: true,
  contexts: { TaonBaseContext },
  entities: { TaonEmailListMemberEntity },
  controllers: { TaonEmailListMemberController },
  repositories: {
    // TaonEmailListMemberKvRepository
    TaonEmailListMemberRepository,
  },
  providers: { TaonEmailListMemberProvider },
  // middlewares: { TaonEmailListMemberMiddleware },
  // subscribers: { TaonEmailListMemberSubscriber },
}));