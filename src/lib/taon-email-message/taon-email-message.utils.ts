import { TaonEmailMessageModels } from './taon-email-message.models';

export namespace TaonEmailMessageUtils {
  export function isActive(state: string): state is TaonEmailMessageModels.TaonEmailMessageState {
    return state === 'active';
  }
}