import { TaonEmailDeliveryAttemptModels } from './taon-email-delivery-attempt.models';

export namespace TaonEmailDeliveryAttemptUtils {
  export function isActive(state: string): state is TaonEmailDeliveryAttemptModels.TaonEmailDeliveryAttemptState {
    return state === 'active';
  }
}