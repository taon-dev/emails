import { TaonEmailTemplateModels } from './taon-email-template.models';

export namespace TaonEmailTemplateUtils {
  export function isActive(state: string): state is TaonEmailTemplateModels.TaonEmailTemplateState {
    return state === 'active';
  }
}