import { TaonEmailListModels } from './taon-email-list.models';

export namespace TaonEmailListUtils {
  export function isActive(state: string): state is TaonEmailListModels.TaonEmailListState {
    return state === 'active';
  }
}