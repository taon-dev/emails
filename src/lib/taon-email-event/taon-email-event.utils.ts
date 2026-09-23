import { TaonEmailEventModels } from './taon-email-event.models';

export namespace TaonEmailEventUtils {
  export function isActive(state: string): state is TaonEmailEventModels.TaonEmailEventState {
    return state === 'active';
  }
}