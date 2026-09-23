import { TaonEmailListMemberModels } from './taon-email-list-member.models';

export namespace TaonEmailListMemberUtils {
  export function isActive(state: string): state is TaonEmailListMemberModels.TaonEmailListMemberState {
    return state === 'active';
  }
}