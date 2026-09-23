import { TaonEmailContactModels } from './taon-email-contact.models';

export namespace TaonEmailContactUtils {
  export function isActive(state: string): state is TaonEmailContactModels.TaonEmailContactState {
    return state === 'active';
  }
}